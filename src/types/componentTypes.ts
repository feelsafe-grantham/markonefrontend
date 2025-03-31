export interface VerCapsType {
  type: "service" | "budget";
  caps: "blue" | "red";
  text: string;
  value: string;
}
export interface Question {
  name: string;
  options: { value: string; label: string }[];
}
export interface Answers {
  one1: string;
  two2: string;
  three3: string;
}

export const ActiveTabType = {
  Home: "home",
  Project: "blog",
  Seoproject: "connect",
};
