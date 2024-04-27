import { IQuestion } from "@/types";
import { useEffect } from "react";

interface IResultQuestion {
  question: IQuestion;
  userAns: number[];
}

const ResultQuestion = ({ question, userAns }: IResultQuestion) => {
  useEffect(() => {
    question.options.forEach((option) => {
      if (userAns.includes(option.id)) {
        console.log(option);
      }
    });
  }, []);

  const findWrongAnswer = (id: number) => {
    if (userAns.includes(id)) return "text-red-600";
  };

  const findCorrectAnswer = (correctId: number, id: number) => {
    if (correctId === id) return "text-green-600";
  };

  return (
    <li>
      <h3 className="flex items-center gap-3 text-md text-gray-700">
        <span className="flex justify-center items-center text-sm font-semibold bg-gray-700 text-white w-6 h-6 rounded-full">
          {question.nthQuestion}
        </span>
        {question.question}
      </h3>

      {
        <ul className="flex flex-col gap-2 mt-6 ml-4 text-gray-600">
          {question.options.map((option) => {
            return (
              <li
                className={`flex items-center gap-1 cursor-default ${findWrongAnswer(
                  option.id
                )} ${findCorrectAnswer(question.correctId, option.id)}`}
                key={option.id}
              >
                <span className="text-md w-6">{option?.nthOption}</span>
                <div className={`text-md rounded-md px-4 py-2`}>
                  {option?.option}
                </div>
              </li>
            );
          })}
        </ul>
      }
    </li>
  );
};

export default ResultQuestion;
