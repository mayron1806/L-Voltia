import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  reverse?: boolean;
  iconSrc?: string;
}
const FeatureItem = ({ iconSrc, reverse, description, title }: Props) => {
  return ( 
    <li className="grid grid-cols-1  md:grid-cols-5">
      <div className={cn("md:col-span-2 rounded-lg min-h-[300px]", reverse && "md:order-last")}>
        <Image alt={iconSrc ?? 'icon'} src={iconSrc || ""} width={300} height={300} className="mx-auto"/>
      </div>
      <div className="md:col-span-3 space-y-2 h-full flex flex-col justify-center">
        <h3 className="font-bold text-lg">
          {title}
        </h3>
        <p className="font-normal">
          {description}
        </p>
      </div>
    </li>
  );
}
 
export default FeatureItem;