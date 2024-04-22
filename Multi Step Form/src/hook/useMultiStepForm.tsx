import { ReactElement, useState } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep((step) => {
      if (step >= steps.length - 1) {
        return step;
      }
      return step + 1;
    });
  }
  function back() {
    setCurrentStep((step) => {
      if (step <= 0) {
        return step;
      }
      return step - 1;
    });
  }
  function goto(index: number) {
    setCurrentStep(index);
  }

  return {
    steps,
    currentStep,
    render: steps[currentStep],
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    goto,
    next,
    back,
  };
}
