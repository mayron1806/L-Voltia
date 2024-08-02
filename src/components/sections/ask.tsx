import Image from "next/image";
import Section from "../section";
import Subtitle from "../sub-title";

const Ask = () => {
  return ( 
    <Section className="flex gap-5 items-center"> {/* ask */}
      <div>
        <Subtitle className="text-left mb-5 text-primary">
          PARE E PENSE
        </Subtitle>
        <p>
          Imagine todas as horas que você perde respondendo manualmente a perguntas repetitivas que poderiam ser automatizadas. Não seria melhor investir seu tempo no crescimento do seu negócio e deixar que o Zoldy cuide das respostas para você?
        </p>
      </div>
      <div className="relative w-full h-[250px]">
        <Image alt="stop and think" src="/icons/ask.svg" fill />
      </div>
    </Section>
  );
}
 
export default Ask;