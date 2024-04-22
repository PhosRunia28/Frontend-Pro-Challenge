import FormInput from "./ui/FormInput";
import FormWrapper from "./ui/FormWrapper";
type PersonalData = {
  FullName: string;
  EmailAddress: string;
  PhoneNumber: string;
  Portofolio_GithubLink: string;
};
type PersonalFormProps = PersonalData & {
  updatedField: (fields: Partial<PersonalData>) => void;
};
export default function PersonalForm({
  FullName,
  EmailAddress,
  PhoneNumber,
  Portofolio_GithubLink,
  updatedField,
}: PersonalFormProps) {
  return (
    <FormWrapper
      title="Personal Information"
      description={
        "Please provide your personal details so we can get to know you better"
      }
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-b-2 border-gray-200 pb-10">
        <FormInput
          label={"Full Name"}
          value={FullName}
          placeholder={"Ex: Rishi Purwar"}
          type={"text"}
          name={"full_name"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updatedField({ FullName: e.target.value })
          }
        />
        <FormInput
          label={"Email Address"}
          value={EmailAddress}
          placeholder={"name@gmail.com"}
          type={"email"}
          name={"email_address"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updatedField({ EmailAddress: e.target.value })
          }
        />
        <FormInput
          label={"Phone Number"}
          placeholder={"+91 1234567890"}
          value={PhoneNumber}
          type={"text"}
          name={"phone_number"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updatedField({ PhoneNumber: e.target.value })
          }
        />
        <FormInput
          label={"Portofolio/Github Link"}
          value={Portofolio_GithubLink}
          placeholder={"github.com/rishipurwar1"}
          type={"text"}
          name={"portofolio"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updatedField({ Portofolio_GithubLink: e.target.value })
          }
        />
      </div>
    </FormWrapper>
  );
}
