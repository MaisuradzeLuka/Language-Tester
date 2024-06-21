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

export interface IFormInputs {
  questions: {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    correctOption: string;
  }[];
}
