"use server";

import User from "../models/user.model";
import connectToDb from "../mongoose";

interface IUpdateUser {
  userId: string;
  name: string;
  lastname: string;
}

export async function updateUser({ userId, name, lastname }: IUpdateUser) {
  await connectToDb();

  try {
    await User.findOneAndUpdate(
      { userId },
      { name, lastname },
      { upsert: true }
    );
  } catch (error: any) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}

export async function fetchUser(userId: string) {
  await connectToDb();

  try {
    return await User.findOne({ userId });
  } catch (error: any) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}
