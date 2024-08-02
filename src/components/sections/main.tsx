import { BadgeCheckIcon } from "lucide-react";
import BackgroundBubble from "../background-bubble";
import Logo from "../logo";
import MainButton from "../main-button";
import { FlipWords } from "../ui/flip-words";

type Props = {
  words: string[];
  title: string;
  subtitle: string;
  features: string[];
}
const Main = ({ words, features, subtitle, title }: Props) => {
  return (
    <BackgroundBubble>
      <main className="container relative py-10">
        <header className="flex flex-col items-center text-center mb-10">
          <Logo />
          <div className="flex flex-col items-center space-y-2 my-16">
            <div className="text-foreground text-6xl h-52 font-bold">
              <h1>{title}</h1>
              <FlipWords words={words} className="text-primary" /> <br />
            </div>
            <h2 className="font-bold text-3xl md:w-[900px]">
              {subtitle}
            </h2>
          </div>
          <MainButton />
        </header>
        <ul className="text-center space-y-2">
          {
            features.map((feature, index) => (
              <li key={index} className="flex gap-2 items-center justify-center"> <BadgeCheckIcon className="w-4 h-4 text-primary" /> {feature}</li>
            ))
          }
        </ul>
      </main>
    </BackgroundBubble>
  );
}
 
export default Main;