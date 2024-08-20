"use server";

import { IFormInputs } from "@/types";
import Questions from "../models/questions.model";
import connectToDb from "../mongoose";

interface IAddQuestions {
  questionsData: IFormInputs;
  author: string;
  authorId: string;
  title: string;
}

export async function addQuestions({
  questionsData,
  author,
  authorId,
  title,
}: IAddQuestions) {
  await connectToDb();

  try {
    await Questions.create({
      questions: questionsData.questions,
      author,
      authorId,
      title,
    });
  } catch (error: any) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}

export async function retriveQuestions() {
  try {
    await connectToDb();

    return Questions.find();
  } catch (error: any) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}
