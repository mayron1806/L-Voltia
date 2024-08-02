import Section from "@/components/section";
import Item from "./item";
import Root from "./root";
import Subtitle from "@/components/sub-title";

type Props = {
  faqList: Array<{ ask: string, answer: string }>;
}
const FAQ = ({ faqList }: Props) => {
  return (
    <Section> {/* FAQ */}
      <div>
        <Subtitle className="mb-0">
          Tem alguma dúvida? Nós respondemos
        </Subtitle>
        <h3 className="text-center font-bold text-lg">FAQ</h3>
      </div>
      <Root>
        {
          faqList.map((faq, index) => (
            <Item
              key={index}
              ask={faq.ask}
              answer={faq.answer}
            />
          ))
        }
      </Root>
    </Section>
  );
}
 
export default FAQ;