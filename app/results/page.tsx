"use client";

import ResultQuestion from "@/components/ResultQuestion";
import { getData, getUserId } from "@/lib/Actions";
import { IQuestion, IUserData } from "@/types";
import { useEffect, useState } from "react";

interface IResults {
  fullLength: number;
  correctCount: number;
  wrongCount: number;
}

interface IResultAnswers {
  userAnswers: number[];
  correctAnswers: number[];
  wrongAnswers: IQuestion[];
}

const page = () => {
  const [resultsCounter, setResultsCounter] = useState({} as IResults);
  const [resultAnswers, setResultAnswers] = useState({} as IResultAnswers);

  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : false;

  useEffect(() => {
    const fetchUsedData = async () => {
      const userData = await getUserId(user, "user");
      const [questionsData] = await getData();

      handleAnswers(userData as IUserData, questionsData);
    };

    fetchUsedData();
  }, []);

  const handleAnswers = (userData: IUserData, questionsData: IQuestion[]) => {
    const fullLength = questionsData.length;
    const userAnswers = userData.ans;
    const correctAnswersArray = questionsData.map(
      (question) => question.correctId
    );

    let correctCount = 0;

    userAnswers.forEach((userAnswer) => {
      if (correctAnswersArray.includes(userAnswer)) {
        correctCount++;
      }
    });

    const wrongCount = fullLength - correctCount;

    setResultsCounter({ fullLength, correctCount, wrongCount });

    const wrongAnswers = questionsData.filter(
      (question) => !userAnswers.includes(question.correctId)
    );

    setResultAnswers({
      userAnswers,
      correctAnswers: correctAnswersArray,
      wrongAnswers,
    });
  };

  return (
    <main className=" bg-milky-white min-h-screen px-2 py-20">
      <div className="flex flex-col gap-32 justify-between bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        <div className="flex flex-col gap-16 text-2xl font-medium">
          <p>ტესტი დასრულებლია</p>

          <p>
            სწორუ პასუხი:{" "}
            <span className=" text-green-500">
              {resultsCounter.correctCount}
            </span>
            /{resultsCounter.fullLength}
          </p>

          <p>
            არასწორი პასუხი:{" "}
            <span className="text-red-500">{resultsCounter.wrongCount}</span>/
            {resultsCounter.fullLength}
          </p>
        </div>

        <ul>
          <div className="flex flex-col gap-14">
            {resultAnswers?.wrongAnswers?.map((wrongAnswer, index) => (
              <ResultQuestion
                key={index}
                question={wrongAnswer}
                userAns={resultAnswers.userAnswers}
              />
            ))}
          </div>
        </ul>
      </div>
    </main>
  );
};

export default page;
