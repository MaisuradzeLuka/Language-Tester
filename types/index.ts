export interface IQuestion {
  nthQuestion: string;
  options: { id: number; nthOption: string; option: string }[];
  question: string;
  correctId: number;
}

export interface IUserData {
  name: string;
  lastname: string;
  ans: number[];
}
