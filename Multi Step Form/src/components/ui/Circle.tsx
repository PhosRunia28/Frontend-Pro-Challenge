import cn from "classnames";
import { motion } from "framer-motion";
import { ReactNode } from "react";
type CircleProps = {
  children: ReactNode;
  fill?: boolean;
};
export default function Circle({ children, fill = false }: CircleProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backgroundColor: !fill ? "rgb(209 213 219)" : "rgb(249 115 22)",
        color: fill ? "#fff" : "#000",
      }}
      exit={{ opacity: 0, backgroundColor: "rgb(209 213 219)", color: "#000" }}
      transition={{ duration: 0.4 }}
      className={cn(`rounded-full px-3 py-1 text-center `)}
    >
      {children}
    </motion.div>
  );
}
