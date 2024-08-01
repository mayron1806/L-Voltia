import { Accordion } from "../ui/accordion";

const Root = ({ children }: {children: React.ReactNode}) => {
  return ( 
    <Accordion type="single" collapsible className="w-full">
      {children}
    </Accordion>
  );
}
 
export default Root;