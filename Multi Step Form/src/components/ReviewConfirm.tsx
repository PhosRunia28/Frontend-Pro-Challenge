import { FormData } from "./models/FormData";
import FormWrapper from "./ui/FormWrapper";
import Review from "./ui/Review";
type ReviewDataProps = FormData & {
  updatedField: (fields: Partial<FormData>) => void;
};
export default function ReviewConfirm({
  ChallengePreference,
  EmailAddress,
  FullName,
  PhoneNumber,
  Portofolio_GithubLink,
  SkillLevel,
}: ReviewDataProps) {
  return (
    <FormWrapper
      title="Review and Confirm"
      description="Please review your information to make sure everything is accurate."
    >
      <div className="grid grid-cols-3 gap-x-5 gap-y-4 border-b-2 border-gray-200 pb-10">
        <Review input="Full Name" value={FullName} />
        <Review input="Email Address" value={EmailAddress} />
        <Review input="Phone Number" value={PhoneNumber} />
        <Review input="Portofolio/Github Link" value={Portofolio_GithubLink} />
        <Review input="Skill Level" value={SkillLevel} />
        <Review input="Challenge Preference" value={ChallengePreference} />
      </div>
    </FormWrapper>
  );
}
