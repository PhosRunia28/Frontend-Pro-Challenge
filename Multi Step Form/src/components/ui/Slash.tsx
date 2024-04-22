import cn from "classnames";
import { motion } from "framer-motion";
type SlashProps = {
  fill?: boolean;
};
export default function Slash({ fill = false }: SlashProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backgroundColor: !fill ? "rgb(209 213 219)" : "rgb(249 115 22)",
      }}
      exit={{ opacity: 0, backgroundColor: "rgb(209 213 219)" }}
      transition={{ duration: 0.4 }}
      className={cn(`h-[0.3rem] w-24 rounded-full`, {
        "bg-orange-500": fill,
        "bg-gray-300": !fill,
      })}
    ></motion.div>
  );
}
