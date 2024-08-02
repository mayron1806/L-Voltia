import Section from "../section";
import Subtitle from "../sub-title";

const HowWorks = () => {
  return ( 
    <Section className="text-center mb-20">
      <Subtitle>Mas como o Zoldy funciona?</Subtitle>
      <p className="">
        O Zoldy utiliza um sistema de créditos: cada vez que o bot responde a uma pergunta do usuário, um crédito é consumido. Cada plano oferece uma quantidade específica de créditos, e é possível adquirir mais créditos a qualquer momento conforme a necessidade. O bot usa inteligência artificial para responder às perguntas dos usuários de forma precisa e relevante. No entanto, como o bot pode cometer erros, ele não deve ser utilizado para assuntos críticos. Ao contrário de outras plataformas, os créditos do Zoldy não expiram ou reiniciam a cada mês, proporcionando mais flexibilidade e economia para o cliente.
      </p>
    </Section>
  );
}
 
export default HowWorks;