import close from "../img/close.svg";

type ItemsProps = {
  skills: { id: number; skill: string }[];
  handleClose: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    skillId: number,
  ) => void;
  handleCloseAll: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};
export default function Items({
  skills,
  handleClose,
  handleCloseAll,
}: ItemsProps) {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {skills.map(({ skill, id }) => {
        return (
          <button
            key={id}
            type="button"
            className="flex items-center gap-2 bg-primary px-2 py-1 text-sm font-medium"
          >
            {skill}
            <img
              src={close}
              alt="close"
              className="w-5 cursor-pointer bg-cover bg-center"
              onClick={(e) => handleClose(e, id)}
            />
          </button>
        );
      })}
      <img
        src={close}
        alt="close"
        className="w-6 cursor-pointer bg-cover bg-center"
        onClick={(e) => handleCloseAll(e)}
      />
    </div>
  );
}
