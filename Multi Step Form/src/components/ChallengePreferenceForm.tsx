import CheckInput from "./ui/CheckInput";
import FormWrapper from "./ui/FormWrapper";
type Challenge = {
  ChallengePreference: ("HTML/CSS/JS" | "ReactJs" | "AngularJs" | "Vue.js")[];
};
type ChallengePreferenceProps = Challenge & {
  updatedField: (fields: Partial<Challenge>) => void;
};
export default function ChallengePreferenceForm({
  ChallengePreference,
  updatedField,
}: ChallengePreferenceProps) {
  const updatedChallengePreference = (
    value: "HTML/CSS/JS" | "ReactJs" | "AngularJs" | "Vue.js",
  ) => {
    return ChallengePreference.includes(value)
      ? ChallengePreference.filter((item) => item !== value)
      : [...ChallengePreference, value];
  };
  return (
    <FormWrapper
      title="Challenge Preference"
      description="please tell us which frontend challenges you would like to participate in."
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-b-2 border-gray-200 pb-10">
        <CheckInput
          check={ChallengePreference.includes("HTML/CSS/JS")}
          onChange={() =>
            updatedField({
              ChallengePreference: updatedChallengePreference("HTML/CSS/JS"),
            })
          }
          id="html"
          value="HTML/CSS/JS"
        />
        <CheckInput
          check={ChallengePreference.includes("ReactJs")}
          onChange={() =>
            updatedField({
              ChallengePreference: updatedChallengePreference("ReactJs"),
            })
          }
          id="react"
          value="ReactJs"
        />
        <CheckInput
          check={ChallengePreference.includes("AngularJs")}
          onChange={() =>
            updatedField({
              ChallengePreference: updatedChallengePreference("AngularJs"),
            })
          }
          id="angular"
          value="AngularJs"
        />
        <CheckInput
          check={ChallengePreference.includes("Vue.js")}
          onChange={() =>
            updatedField({
              ChallengePreference: updatedChallengePreference("Vue.js"),
            })
          }
          id="vue"
          value="Vue.js"
        />
      </div>
    </FormWrapper>
  );
}
