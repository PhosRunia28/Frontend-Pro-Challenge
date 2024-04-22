import { Fragment, ReactElement } from "react";
import Circle from "./Circle";
import Slash from "./Slash";
type StepIndicatorProps = {
  steps: ReactElement[];
  currentStep: number;
};
export default function StepIndicator({
  steps,
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="mb-6 flex items-center justify-between gap-3 border-b-2 border-gray-200 pb-8">
      {steps.map((_, index) => {
        return (
          <Fragment key={index}>
            <Circle fill={index <= currentStep}>{index + 1}</Circle>
            {index !== steps.length - 1 ? (
              <Slash fill={index < currentStep} />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}
