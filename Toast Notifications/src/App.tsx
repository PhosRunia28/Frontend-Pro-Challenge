import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./components/Button";
import Toast from "./components/Toast";
import { NotificationToast } from "./models/notificationToast";

export default function App() {
  const [notificationToast, setNotificationToast] = useState<
    NotificationToast[]
  >([]);
  const createNotification = (
    variant: "success" | "info" | "warning" | "error",
    icon: JSX.Element,
  ) => {
    const updatedNotification: NotificationToast = {
      id: Math.random(),
      variant,
      icon,
    };
    setNotificationToast((prev) => [...prev, updatedNotification]);
    resetNotification();
  };
  function resetNotification() {
    setTimeout(() => {
      setNotificationToast((prev) => prev.slice(1));
    }, 2000);
  }
  return (
    <div className="flex h-screen items-center justify-center bg-blue-100">
      <main className="mx-auto flex w-full max-w-xs flex-col items-center gap-5 bg-white px-4 py-6 shadow-md">
        <Button
          variant="success"
          handlerClick={() =>
            createNotification(
              "success",
              <CheckCircledIcon className="h-6 w-6 text-2xl text-green-500" />,
            )
          }
        >
          Success
        </Button>
        <Button
          variant="info"
          handlerClick={() =>
            createNotification(
              "info",
              <InfoCircledIcon className="h-6 w-6 text-2xl text-blue-500" />,
            )
          }
        >
          Info
        </Button>
        <Button
          variant="warning"
          handlerClick={() =>
            createNotification(
              "warning",
              <ExclamationTriangleIcon className="h-6 w-6 text-2xl text-yellow-500" />,
            )
          }
        >
          Warning
        </Button>
        <Button
          variant="error"
          handlerClick={() =>
            createNotification(
              "error",
              <CrossCircledIcon className="h-6 w-6 text-2xl text-red-500" />,
            )
          }
        >
          Error
        </Button>
      </main>
      <div className="absolute right-6 top-6 flex w-full max-w-xs flex-col gap-5">
        <AnimatePresence>
          {notificationToast &&
            notificationToast.map((notification, index) => {
              return <Toast key={index} notification={notification} />;
            })}
        </AnimatePresence>
      </div>
    </div>
  );
}
