import { FlipWords } from "./ui/flip-words";

const words = ["super poderes", "respostas automaticas", "agendamento de mensagens",  "multiplos atendentes", "suporte 24hs"];
const MainTitle = () => {
  
  return ( 
    <>
      <h1>Whatsapp com <span className="sr-only">super poderes</span> </h1> <br />
      <FlipWords words={words} /> <br />
    </>
  );
}
 
export default MainTitle;