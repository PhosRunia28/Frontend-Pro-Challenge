export default function SelectItem({
  skill,
  handleSelect,
}: {
  skill: string;
  handleSelect: (skill: string, id: number) => void;
}) {
  return (
    <li
      className="cursor-pointer p-2 font-medium transition hover:bg-primary"
      onClick={() => handleSelect(skill, Date.now())}
    >
      {skill}
    </li>
  );
}
