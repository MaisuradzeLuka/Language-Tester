"use client";

import { Form } from "@/components/ui/form";
import { useForm, useFieldArray } from "react-hook-form"; // Import Controller from react-hook-form
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { questionsSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { z } from "zod";

import QuestionForm from "@/components/forms/QuestionForm";
import { IFormInputs } from "@/types";

const Page = () => {
  const form = useForm<z.infer<typeof questionsSchema>>({
    resolver: zodResolver(questionsSchema),
    defaultValues: {
      questions: [
        {
          question: "",
          option1: "",
          option2: "",
          option3: "",
          correctOption: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data.questions);
  };

  const onClick = () => {
    append({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      correctOption: "",
    });
  };

  return (
    <section className="bg-milky-white min-h-screen px-2 py-20">
      <div className="flex flex-col gap-12 bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        <h1 className="text-yellow text-4xl font-semibold text-center">
          Add questions
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 rounded-md"
          >
            {fields.map((question, index) => (
              <QuestionForm
                key={question.id}
                control={form.control}
                index={index}
              />
            ))}

            <div className="flex justify-between">
              <Button type="submit" className="hover:bg-yellow">
                Submit
              </Button>
              <Button
                type="button"
                onClick={onClick}
                className="bg-yellow hover:bg-nav-grey"
              >
                Add Question
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Page;
