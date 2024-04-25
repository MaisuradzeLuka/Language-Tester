"use client";

import { getData, getUserId } from "@/lib/Actions";
import { IQuestion, IUserData } from "@/types";
import { useEffect, useState } from "react";

interface IResults {
  fullLength: number;
  correctCount: number;
  wrongCount: number;
}

const page = () => {
  const [resultsData, setResultsData] = useState({} as IResults);

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
    const correctAnswers = questionsData.map((question) => question.correctId);

    let correctCount = 0;

    userAnswers.forEach((userAnswer) => {
      if (correctAnswers.includes(userAnswer)) {
        correctCount++;
      }
    });

    const wrongCount = fullLength - correctCount;

    setResultsData({ fullLength, correctCount, wrongCount });
  };

  return (
    <main className=" bg-milky-white min-h-screen px-2 py-20">
      <div className="flex flex-col gap-32 bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        <p>ტესტი დასრულებლია</p>

        <p>
          სწორუ პასუხი: <span>{resultsData.correctCount}</span>/
          {resultsData.fullLength}
        </p>

        <p>
          არასწორი პასუხი: <span>{resultsData.wrongCount}</span>/
          {resultsData.fullLength}
        </p>
      </div>
    </main>
  );
};

export default page;
