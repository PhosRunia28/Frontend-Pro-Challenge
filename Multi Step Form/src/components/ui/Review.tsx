type ReviewProps = {
  value: string | string[];
  input:
    | "Full Name"
    | "Email Address"
    | "Phone Number"
    | "Portofolio/Github Link"
    | "Skill Level"
    | "Challenge Preference";
};
export default function Review({ value, input }: ReviewProps) {
  return (
    <div className="rounded-xl bg-gray-200 px-5 py-4 ">
      <h4 className="text-sm font-light">{input}</h4>
      <div className="text-sm font-medium">
        {typeof value === "string" ? (
          <h3>{value}</h3>
        ) : (
          value.map((challenge, index) => <h3 key={index}>{challenge}</h3>)
        )}
      </div>
    </div>
  );
}
