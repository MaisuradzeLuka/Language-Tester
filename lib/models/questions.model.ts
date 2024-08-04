import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
  questions: [
    {
      question: String,
      option1: String,
      option2: String,
      option3: String,
      correctOption: String,
    },
  ],
  author: { type: String, require: true },
  authorId: { type: String, require: true },
  title: { type: String, require: true },
});

const Questions =
  mongoose.models.Questions || mongoose.model("Questions", questionsSchema);

export default Questions;
