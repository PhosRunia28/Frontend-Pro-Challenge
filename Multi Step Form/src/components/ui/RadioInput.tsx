type RadioInputProps = {
  value: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon: string;
  check: boolean;
  onChange: () => void;
};
export default function RadioInput({
  value,
  icon,
  check,
  onChange,
}: RadioInputProps) {
  return (
    <div className="relative">
      <input
        type="radio"
        name="skillLevel"
        value={value}
        required
        checked={check}
        onChange={onChange}
        className="peer absolute inset-0 cursor-pointer opacity-0"
      />
      <div className="flex items-center gap-4 rounded-md border border-gray-300 px-4 py-4 peer-checked:border-orange-500">
        <div className="relative flex max-w-fit items-center justify-center rounded-full bg-orange-500 px-5 py-5">
          <img
            src={icon}
            alt={icon}
            className="absolute inset-0 mx-auto my-1 w-[80%]"
          />
        </div>
        <h4 className="font-medium">{value}</h4>
      </div>
    </div>
  );
}
