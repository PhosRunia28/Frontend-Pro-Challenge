import { motion } from "framer-motion";
import finish from "../img/finish.svg";
export default function Congratulation() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center gap-4  rounded-xl bg-white px-8 py-16 text-center shadow-[0_30px_50px_-20px] shadow-orange-300"
    >
      <img src={finish} alt="" className="w-full max-w-[8rem]" />
      <h2 className="text-3xl font-bold -tracking-tight">Congratulation!</h2>
      <p className="w-full max-w-md text-sm leading-relaxed text-gray-600">
        Your profile has been created and you are now ready to start
        participating in challenges that match your interests and coding
        experience level.
      </p>
    </motion.main>
  );
}
