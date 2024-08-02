'use client';
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { TwitterShareButton, WhatsappShareButton, LinkedinShareButton, XIcon, WhatsappIcon, LinkedinIcon, FacebookShareButton, FacebookIcon, RedditShareButton, RedditIcon, TelegramShareButton, TelegramIcon, VKShareButton, VKIcon } from "react-share";
import { Share2 } from "lucide-react";
const Share = () => {
  const [link, setLink] = useState<string>('');
  useEffect(()=> {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      setLink(`${url.protocol}//${url.host}`);
    }
  }, [window]);
  return ( 
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-4 px-8 transition-all bg-gradient-to-tr from-secondary to-indigo-500 flex gap-2 items-center rounded-lg text-lg font-bold relative">
          <Share2 className="w-5 h-5" strokeWidth={3} />
          Compartilhar
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full flex gap-4 justify-center items-center">
        <RedditShareButton url={link}>
          <RedditIcon round size={32} />
        </RedditShareButton>
        <TelegramShareButton url={link}>
          <TelegramIcon round size={32} />
        </TelegramShareButton>
        <VKShareButton url={link}>
          <VKIcon round size={32} />
        </VKShareButton>
        <FacebookShareButton url={link}>
          <FacebookIcon round size={32} />
        </FacebookShareButton>
        <TwitterShareButton url={link}>
          <XIcon round size={32} />
        </TwitterShareButton>
        <WhatsappShareButton url={link}>
          <WhatsappIcon round size={32} />
        </WhatsappShareButton>
        <LinkedinShareButton url={link}>
          <LinkedinIcon round size={32} />
        </LinkedinShareButton>
      </PopoverContent> 
    </Popover>
  );
}
 
export default Share;