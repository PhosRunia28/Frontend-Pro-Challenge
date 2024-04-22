type FormInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInput({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        required
        className="rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-orange-500"
        id={name}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
