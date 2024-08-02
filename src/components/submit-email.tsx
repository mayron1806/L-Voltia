'use client';
import { submitEmail } from "@/actions/submit-email";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SubmitEmail = () => {
  const [state, formAction] = useFormState(submitEmail, undefined);
  const [email, setEmail] = useState("");

  return (  
    <form 
      action={formAction}
      className="gap-2 flex flex-col items-center w-full max-w-screen-sm mx-auto justify-center"
    >
      <label id="form" className="font-bold text-2xl">Quero automatizar meu WhatsApp</label>
      <input
        type="email" 
        placeholder="Seu melhor e-mail"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        className="p-4 rounded-md border px-6 text-xl w-full border-primary"
      />
      {
        !state?.success &&
        <span className="text-red-500 text-sm">{state?.error}</span>
      }
      {
        state?.success &&
        <span className="text-green-500 text-sm">Email enviado!</span>
      }
      <Submit email={email} />
    </form>
  );
}
type SubmitProps = {
  email: string;
}
const Submit = ({ email }: SubmitProps) => {
  const { pending } = useFormStatus();
  return (
    <button 
      className="p-8 py-4 text-xl bg-primary flex disabled:opacity-80 gap-2 text-background font-bold rounded-md"
      onClick={() => {
        sendGTMEvent({ event: 'submit-email', value: email });
        sendGAEvent({ event: 'submit-email', value: email });
      }}
      disabled={pending}
    >
      { pending && <Loader2Icon className="animate-spin text-background" strokeWidth={3} /> }
      Automatizar
    </button>
  )
}
export default SubmitEmail;