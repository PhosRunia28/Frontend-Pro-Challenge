import cn from "classnames";
import { ReactNode } from "react";
type ButtonProps = {
  outline?: boolean;
  children: ReactNode;
  buttonClicked?: () => void;
  type?: "submit" | "button";
};

export default function Button({
  outline = false,
  children,
  buttonClicked,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        `rounded-md border border-orange-500  px-8 py-2  transition `,
        {
          "bg-orange-500 text-white hover:bg-white hover:text-orange-500":
            !outline,
          "bg-white text-orange-500 hover:bg-orange-500 hover:text-white":
            outline,
        },
      )}
      onClick={buttonClicked}
    >
      {children}
    </button>
  );
}
