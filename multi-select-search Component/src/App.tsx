import { useState } from "react";
import Items from "./components/Items";
import SelectItem from "./components/SelectItem";
import caretDown from "./img/caret-down.svg";

function App() {
  const [openSelect, setOpenSelect] = useState(false);
  const [skills, setSkills] = useState<{ id: number; skill: string }[]>([]);
  function handleCloseItem(
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    skillId: number,
  ) {
    e.stopPropagation();
    setSkills((prev) => prev.filter((skill) => skill.id !== skillId));
  }
  function handleCloseAll(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    e.stopPropagation();
    setSkills([]);
  }

  function handleSelect(skill: string, id: number) {
    if (skills.length < 5) {
      const isExisting = skills.some((item) => item.skill === skill);
      if (!isExisting) {
        setSkills((prev) => [...prev, { skill, id }]);
      } else {
        console.error("Skill already Added.");
      }
    } else {
      console.error("Cannot add more than 5 skills.");
    }
  }
  console.log(skills);
  return (
    <main className="flex h-screen items-center justify-center bg-primary font-inter">
      <div className="mx-auto w-full max-w-2xl space-y-5 rounded px-4">
        <div
          className="relative w-full cursor-pointer rounded-md border border-black bg-white px-5 py-3"
          onClick={() => {
            skills.length === 0 ? setOpenSelect(!openSelect) : "";
          }}
        >
          {skills.length === 0 ? (
            <div className="flex justify-between">
              <h3 className="font-medium">Add upto to 5 skill</h3>
              <img
                src={caretDown}
                alt="caret Down"
                className="bg-cover bg-center"
              />
            </div>
          ) : (
            <Items
              skills={skills}
              handleClose={handleCloseItem}
              handleCloseAll={handleCloseAll}
            />
          )}
        </div>
        {(skills.length > 0 || openSelect) && (
          <ul className="space-y-2 rounded border border-black bg-white px-4 py-2">
            <SelectItem skill="HTML" handleSelect={handleSelect} />
            <SelectItem skill="CSS" handleSelect={handleSelect} />
            <SelectItem skill="Javascript" handleSelect={handleSelect} />
            <SelectItem skill="TailwindCss" handleSelect={handleSelect} />
            <SelectItem skill="ReactJs" handleSelect={handleSelect} />
          </ul>
        )}
      </div>
    </main>
  );
}

export default App;
