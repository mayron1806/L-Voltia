import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
}
const Subtitle = ({ children, className }: Props) => {
  return ( 
    <motion.h2
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={cn("text-4xl font-bold text-center mb-5", className)}
    >
      {children}
    </motion.h2>
  );
}
 
export default Subtitle;