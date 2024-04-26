"use client";

import ResultQuestion from "@/components/ResultQuestion";
import { getData, getUserId } from "@/lib/Actions";
import { IQuestion, IUserData } from "@/types";
import { useEffect, useState } from "react";

interface IResults {
  fullLength: number;
  correctCount: number;
  wrongCount: number;
  wrongAnswers: IQuestion[];
}

interface IResultAnswers {
  userAnswers: number[];
  correctAnswers: number[];
}

const page = () => {
  const [resultsData, setResultsData] = useState({} as IResults);
  const [resultAnswers, setResultAnswers] = useState([] as IResultAnswers);

  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : false;

  useEffect(() => {
    const fetchUsedData = async () => {
      const userData = await getUserId(user, "user");
      const [questionsData] = await getData();

      handleAnswers(userData, questionsData);
    };

    fetchUsedData();
  }, []);

  const handleAnswers = (userData: IUserData, questionsData: IQuestion[]) => {
    const fullLength = questionsData.length;
    const userAnswers = userData.ans;
    const correctAnswersArray = questionsData.map(
      (question) => question.correctId
    );

    const wrongAnswers = questionsData.filter(
      (question) => !userAnswers.includes(question.correctId)
    );

    let correctCount = 0;

    userAnswers.forEach((userAnswer) => {
      if (correctAnswersArray.includes(userAnswer)) {
        correctCount++;
      }
    });

    const wrongCount = fullLength - correctCount;

    setResultAnswers({
      userAnswers: userAnswers,
      correctAnswers: correctAnswersArray,
    });
    setResultsData({ fullLength, correctCount, wrongCount, wrongAnswers });
  };

  return (
    <main className=" bg-milky-white min-h-screen px-2 py-20">
      <div className="flex flex-col gap-32 justify-between bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        <div className="flex flex-col gap-16 text-2xl font-medium">
          <p>ტესტი დასრულებლია</p>

          <p>
            სწორუ პასუხი:{" "}
            <span className=" text-green-500">{resultsData.correctCount}</span>/
            {resultsData.fullLength}
          </p>

          <p>
            არასწორი პასუხი:{" "}
            <span className="text-red-500">{resultsData.wrongCount}</span>/
            {resultsData.fullLength}
          </p>
        </div>

        <ul>
          <p className="text-2xl font-medium">არასწორი პასუხები</p>
          <div className="flex flex-col gap-14">
            {resultsData?.wrongAnswers?.map((wrongAnswer, index) => (
              <ResultQuestion key={index} question={wrongAnswer} />
            ))}
          </div>
        </ul>
      </div>
    </main>
  );
};

export default page;
