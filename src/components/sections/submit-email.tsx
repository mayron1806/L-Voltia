'use client';
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import Section from "../section";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  label?: string;
}
const SubmitEmail = ({ label }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Preencha o campo de e-mail");
      return;
    }
    sendGAEvent({ action: "submit_email", category: "form", label: email });
    sendGTMEvent({ event: "submit_email", email });
    setIsLoading(true);
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    setIsLoading(false);
    if (response.ok) {
      router.refresh();
      const template = searchParams.get('template');
      if (template === 'whatsapp') {
        router.push('/congratulations?template=whatsapp');
      } else {
        router.push('/congratulations');
      }
    } else {
      setError("Erro ao enviar o e-mail");
    }
  }
  return (
    <Section>
      <form 
        onSubmit={handleSubmit}
        className="gap-2 flex flex-col items-center w-full max-w-screen-sm mx-auto justify-center"
      >
        <label id="form" className="font-bold text-2xl">{label}</label>
        <input
          type="email" 
          placeholder="Seu melhor e-mail"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-4 rounded-md border px-6 text-xl w-full border-primary"
        />
        {
          error.length > 0 &&
          <span className="text-red-500 text-sm">{error}</span>
        }
        <button 
          className="p-8 py-4 text-xl bg-primary flex disabled:opacity-80 gap-2 text-background font-bold rounded-md"
          onClick={() => {
            sendGTMEvent({ event: 'submit-email', value: email });
            sendGAEvent({ event: 'submit-email', value: email });
          }}
          disabled={isLoading}
        >
          { isLoading && <Loader2Icon className="animate-spin text-background" strokeWidth={3} /> }
          Automatizar
        </button>
      </form>
    </Section>
  );
}

export default SubmitEmail;