import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
}
const Section = ({ children, className }: Props) => {
  return ( 
    <section className={cn("py-10 text-foreground", className)}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

export default Section;