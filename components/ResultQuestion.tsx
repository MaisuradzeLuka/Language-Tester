import { IQuestion } from "@/types";

const ResultQuestion = ({
  question,
  resultAnswers,
}: {
  question: IQuestion;
  resultAnswers: { userAnswers: number[]; correctAnswers: number[] };
}) => {
  return (
    <li>
      <h3 className="flex items-center gap-1 text-md text-gray-700">
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
                className={`flex items-center gap-1 cursor-pointer`}
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
