import Section from "@/components/section";
import PainPointItem from "./item";
import PainPointsRoot from "./root";
import Subtitle from "@/components/sub-title";
type Props = {
  painPoints: Array<{ title: string, description: string }>;
}
const PainPoints = ({ painPoints }: Props) => {
  return (
    <Section>
        <Subtitle>
          Para Quem é o Zoldy?
        </Subtitle>
        <PainPointsRoot>
          {
            painPoints.map((painPoint, index) => (
              <PainPointItem
                key={index}
                title={painPoint.title}
                description={painPoint.description}
              />
            ))
          }
        </PainPointsRoot>
      </Section>
  );
}
 
export default PainPoints;