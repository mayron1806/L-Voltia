'use client';
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
const MainButton = () => {
  return (
    <div className="relative">
      <Link
        href="#form"
        onClick={() => {
          sendGTMEvent({ event: 'main-button-clicked' });
          sendGAEvent({ event: 'main-button-clicked' });
        }}
        className="bg-primary text-background rounded-lg text-xl font-bold p-5 border-primary flex items-center space-x-2"
      >Quero Automatizar</Link>
    </div>
  );
}
 
export default MainButton;