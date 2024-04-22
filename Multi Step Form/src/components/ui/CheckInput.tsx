type CheckInputProps = {
  id: string;
  value: "HTML/CSS/JS" | "ReactJs" | "AngularJs" | "Vue.js";
  check: boolean;
  onChange: () => void;
};
export default function CheckInput({
  id,
  value,
  check,
  onChange,
}: CheckInputProps) {
  return (
    <div className="relative">
      <input
        type="checkbox"
        name={value}
        id={id}
        checked={check}
        value={value}
        onChange={onChange}
        className="peer absolute left-4 top-[1.4rem] cursor-pointer border text-2xl text-orange-500"
      />
      <label htmlFor={id} className="absolute inset-0 cursor-pointer"></label>
      <div className="rounded-lg border border-gray-300 px-5 py-4 pl-10 peer-checked:border-orange-500">
        <h4>{value}</h4>
      </div>
    </div>
  );
}
