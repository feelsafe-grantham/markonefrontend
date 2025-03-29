export interface VerCapsType {
  caps: "blue" | "red";
  text: string;
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
