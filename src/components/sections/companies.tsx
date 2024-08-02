import { InfiniteScroll } from "../infinite-scroll";
import Section from "../section";
import Subtitle from "../sub-title";
import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";
const Companies = () => {
  return ( 
    <Section>
      <Subtitle>
        Varias empresas já estão usando inteligencia artificial, {" "}
        <Highlight>só você vai ficar para trâs?</Highlight>
      </Subtitle>
      <div>
        <InfiniteScroll
          direction="right"
          speed="fast"
          pauseOnHover={false}
        >
          <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
            <Image src="/icons/amazon.svg" alt="amazon" fill />
          </li>
          <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
            <Image src="/icons/facebook.svg" alt="facebook" fill />
          </li>
          <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
            <Image src="/icons/youtube.svg" alt="youtube" fill />
          </li>
          <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
            <Image src="/icons/adobe.svg" alt="adobe" fill />
          </li>
          <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
            <Image src="/icons/google.svg" alt="google" fill />
          </li>
          <li className="relative w-full h-[150px] rounded-lg px-8 py-6">
            <Image src="/icons/microsoft.svg" alt="microsoft" fill />
          </li>
        </InfiniteScroll>
      </div>
    </Section>
  );
}
 
export default Companies;