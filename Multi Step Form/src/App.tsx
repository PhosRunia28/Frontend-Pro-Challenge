import cn from "classnames";
import { AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";
import ChallengePreferenceForm from "./components/ChallengePreferenceForm";
import Congratulation from "./components/Congratulation";
import { FormData } from "./components/models/FormData";
import PersonalForm from "./components/PersonalForm";
import ReviewConfirm from "./components/ReviewConfirm";
import SkillLevelForm from "./components/SkillLevelForm";
import Button from "./components/ui/Button";
import StepIndicator from "./components/ui/StepIndicator";
import useMultiStepForm from "./hook/useMultiStepForm";
function App() {
  const INITIAL_DATA: FormData = {
    FullName: "",
    EmailAddress: "",
    PhoneNumber: "",
    Portofolio_GithubLink: "",
    SkillLevel: "Beginner",
    ChallengePreference: ["HTML/CSS/JS"],
  };
  const [data, setData] = useState(INITIAL_DATA);
  const [finish, setFinish] = useState(false);
  const { steps, render, currentStep, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalForm {...data} updatedField={updatedField} />,
      <SkillLevelForm {...data} updatedField={updatedField} />,
      <ChallengePreferenceForm {...data} updatedField={updatedField} />,
      <ReviewConfirm {...data} updatedField={updatedField} />,
    ]);
  function updatedField(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLastStep) {
      setFinish(true);
    }
    next();
  }
  return (
    <div className="flex flex-col items-center justify-center bg-[#F3F3E3] px-3 py-14">
      <div className="w-full max-w-2xl space-y-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-2xl font-medium sm:text-3xl">
            Join our Community of Developers
          </h2>
          <p className="text-sm sm:text-base">
            To join our community and participate in frontend challenges. <br />
            Please fill out the following form.
          </p>
        </div>
        <AnimatePresence>
          {finish && <Congratulation />}
          {!finish && (
            <form
              action=""
              onSubmit={handleSubmit}
              className="rounded-xl bg-white px-8 py-8 shadow-[0_30px_50px_-20px]  shadow-orange-300"
            >
              <StepIndicator steps={steps} currentStep={currentStep} />
              {render}
              <div
                className={cn(`mt-7 flex `, {
                  "justify-end": isFirstStep,
                  "justify-between": !isFirstStep,
                })}
              >
                {!isFirstStep && (
                  <Button buttonClicked={back} outline>
                    Go Back
                  </Button>
                )}
                <Button type="submit">
                  {isLastStep ? "Finish" : "Next Step"}
                </Button>
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
