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
      href="https://api.whatsapp.com/send?phone=553199733544" className="px-4 py-2 flex gap-2 items-center"
    >
      <RiWhatsappFill className="w-5 h-5" />
      Tirar duvida
    </LinkButton>
  );
}
 
export default NewFAQButton;