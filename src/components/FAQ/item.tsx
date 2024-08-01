import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

type Props = {
  ask: string;
  answer: string;
}
const Item = ({ answer, ask }: Props) => {
  return ( 
    <AccordionItem value={ask}>
      <AccordionTrigger className="font-bold">{ask}</AccordionTrigger>
      <AccordionContent>
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
 
export default Item;