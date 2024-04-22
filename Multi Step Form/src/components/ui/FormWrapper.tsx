import { motion } from "framer-motion";
import { ReactNode } from "react";
type FormWrapperProps = {
  children: ReactNode;
  title: string;
  description: string;
};
export default function FormWrapper({
  children,
  title,
  description,
}: FormWrapperProps) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6 space-y-2">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {children}
    </motion.div>
  );
}
