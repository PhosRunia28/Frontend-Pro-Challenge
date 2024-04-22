import compass from "../img/compass.svg";
import leaf from "../img/leaf.svg";
import rocket from "../img/rocket.svg";
import trophy from "../img/trophy.svg";
import FormWrapper from "./ui/FormWrapper";
import RadioInput from "./ui/RadioInput";
type SkillLevel = {
  SkillLevel: "Beginner" | "Intermediate" | "Advanced" | "Expert";
};
type SkillLevelProps = SkillLevel & {
  updatedField: (fields: Partial<SkillLevel>) => void;
};
export default function SkillLevelForm({
  SkillLevel,
  updatedField,
}: SkillLevelProps) {
  return (
    <FormWrapper
      title="Skill Level"
      description="Please tell us about your skill in frontend development"
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-b-2 border-gray-200 pb-10">
        <RadioInput
          check={SkillLevel === "Beginner"}
          value="Beginner"
          icon={leaf}
          onChange={() => updatedField({ SkillLevel: "Beginner" })}
        />
        <RadioInput
          check={SkillLevel === "Intermediate"}
          value="Intermediate"
          icon={compass}
          onChange={() => updatedField({ SkillLevel: "Intermediate" })}
        />
        <RadioInput
          check={SkillLevel === "Advanced"}
          value="Advanced"
          icon={rocket}
          onChange={() => updatedField({ SkillLevel: "Advanced" })}
        />
        <RadioInput
          check={SkillLevel === "Expert"}
          value="Expert"
          icon={trophy}
          onChange={() => updatedField({ SkillLevel: "Expert" })}
        />
      </div>
    </FormWrapper>
  );
}
