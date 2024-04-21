export type NotificationToast = {
  variant: "success" | "info" | "warning" | "error";
  icon: JSX.Element;
  id: number;
};
