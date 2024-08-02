import Section from "@/components/section";
import FeatureItem from "./item";
import FeatureRoot from "./root";
import Subtitle from "@/components/sub-title";
import { Highlight } from "../../ui/hero-highlight";
type Props = {
  features: Array<{title: string, description: string, iconSrc: string, reverse?: boolean}>
}
const Feature = ({ features }: Props ) => {
  return ( 
    <Section className="text-background bg-gradient-to-r from-foreground to-foreground-lighter"> {/* features */}
      <Subtitle>
        Confira nossas {" "}
        <Highlight duration={1} delay={0.5}>
          incriveis ferramentas
        </Highlight>
      </Subtitle>
      <FeatureRoot>
        {
          features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              iconSrc={feature.iconSrc}
              reverse={feature.reverse}
            />
          ))
        }
      </FeatureRoot>
  </Section>
  );
}
 
export default Feature;