import cn from "classnames";
type ButtonProps = {
  variant: "success" | "info" | "warning" | "error";
  children: React.ReactNode;
  handlerClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, children, handlerClick }) => {
  return (
    <button
      type="button"
      onClick={handlerClick}
      className={cn(
        `w-full max-w-[14rem] rounded-md px-8 py-2 font-bold text-white transition hover:shadow-xl`,
        {
          "bg-green-500 hover:shadow-green-200": variant === "success",
          "bg-blue-500 hover:shadow-blue-200": variant === "info",
          "bg-yellow-500 hover:shadow-yellow-200": variant === "warning",
          "bg-red-500 hover:shadow-red-200": variant === "error",
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
