import cn from "classnames";
import { motion } from "framer-motion";
import { NotificationToast } from "../models/notificationToast";
type ToastProps = {
  notification: NotificationToast;
};
export default function Toast({ notification }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -30 }}
      transition={{ duration: 0.5 }}
      className={cn(
        `flex items-center justify-between rounded-md border-b-4 bg-white p-3 shadow-md`,
        {
          "border-green-500": notification.variant === "success",
          "border-red-500": notification.variant === "error",
          "border-yellow-500": notification.variant === "warning",
          "border-blue-500": notification.variant === "info",
        },
      )}
    >
      <div className="flex items-center gap-3">
        {notification.icon}
        <h4 className="text-sm font-medium">
          {notification.variant} Toast Notification
        </h4>
      </div>
    </motion.div>
  );
}
