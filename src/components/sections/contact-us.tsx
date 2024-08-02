import Section from "../section";
import Subtitle from "../sub-title";
import NewFAQButton from "./new-faq";

const ContactUs = () => {
  return ( 
    <Section>
      <div className="w-full">
        <div
          className={
            "group w-full bg-background overflow-hidden flex flex-col gap-5 lg:flex-row items-center justify-between relative rounded-lg shadow-2xl p-6"
          }
        >
          <div>
            <Subtitle className="uppercase text-primary text-left mb-5">Ainda com dúvidas?</Subtitle>
            <p>Entre em contato conosco através do whatsapp! Vamos responder todas as suas perguntas.</p>
          </div>
          <NewFAQButton />
        </div>
      </div>
    </Section>
  );
}
 
export default ContactUs;