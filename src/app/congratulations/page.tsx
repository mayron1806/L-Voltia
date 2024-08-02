import Confetti from "@/components/confetti";
import Share from "@/components/share";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "L-Voltia / Obrigado por se Inscrever! ",
}
const Congratulations = () => {
  return ( 
    <>
      <Confetti />
      <div className="flex justify-center items-center w-screen h-screen text-background">
        <main className="flex flex-col items-center mx-2 space-y-5 text-center p-4 w-full max-w-[500px] rounded-lg bg-foreground">
          <Image
            src="/icons/congratulations.svg"
            alt="congratulations"
            width={300}
            height={300}
          />
          <h1 className=" my-10 font-bold text-3xl text-primary">
            Obrigado por se Inscrever!
          </h1>
          <h2 className="font-bold text-xl">
            Parabéns! Você agora faz parte da nossa lista de espera exclusiva para o L Voltia.
          </h2>
          <p className="font-normal">
            Agradecemos por se juntar a nós nessa jornada para transformar o atendimento ao cliente com a automação inteligente do L Voltia. Estamos empolgados em tê-lo a bordo e mal podemos esperar para mostrar como nosso bot para WhatsApp pode revolucionar a forma como você se comunica com seus clientes.
            Clique no botão abaixo e compartilhe para nosso sistema alcancar mais pessoas.
          </p>
          <Share />
        </main>
      </div>
    </>
  );
}
 
export default Congratulations;