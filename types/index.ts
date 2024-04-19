export interface IQuestion {
  nthQuestion: string;
  options: { id: number; nthOption: string; option: string }[];
  question: string;
}
