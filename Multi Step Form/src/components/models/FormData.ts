export type FormData = {
  FullName: string;
  EmailAddress: string;
  PhoneNumber: string;
  Portofolio_GithubLink: string;
  SkillLevel: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  ChallengePreference: ("HTML/CSS/JS" | "ReactJs" | "AngularJs" | "Vue.js")[];
};
