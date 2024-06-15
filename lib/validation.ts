import * as z from "zod";

export const questionSchema = z.object({
  question: z.string().min(3),
  option1: z.string(),
  option2: z.string(),
  option3: z.string(),
  correctOption: z.string(),
});

export const userSchema = z.object({
  name: z.string().min(3),
  lastname: z.string().min(3),
});
