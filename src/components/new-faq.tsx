'use client';
import { RiWhatsappFill } from "react-icons/ri";
import LinkButton from "./link-button";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

const NewFAQButton = () => {
  return ( 
    <LinkButton
      onClick={() => {
        sendGTMEvent({ event: 'new-faq' });
        sendGAEvent({ event: 'new-faq' });
      }}
      href="https://wa.me/553199733544?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20L-Voltia%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida"
      target="_blank"
      className="px-4 py-2 flex gap-2 items-center"
    >
      <RiWhatsappFill className="w-5 h-5" />
      Tirar duvida
    </LinkButton>
  );
}
 
export default NewFAQButton;