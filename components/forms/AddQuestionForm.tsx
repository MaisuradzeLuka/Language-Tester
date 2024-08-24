"use client";

import { questionsSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import QuestionForm from "./QuestionForm";
import { IFormInputs } from "@/types";
import { addQuestions } from "@/lib/actions/questions.actions";
import { Form } from "../ui/form";

interface IUserDetails {
  userDetails: { userId: string; name: string; lastname: string };
}

const AddQuestionForm = ({ user, userInfo }: { user: any; userInfo: any }) => {
  console.log(user);
  console.log(userInfo);

  // const form = useForm<z.infer<typeof questionsSchema>>({
  //   resolver: zodResolver(questionsSchema),
  //   defaultValues: {
  //     questions: [
  //       {
  //         question: "",
  //         option1: "",
  //         option2: "",
  //         option3: "",
  //         correctOption: "",
  //       },
  //     ],
  //   },
  // });

  // const { fields, append } = useFieldArray({
  //   control: form.control,
  //   name: "questions",
  // });

  // const onSubmit = async (data: IFormInputs) => {
  //   await addQuestions({
  //     questionsData: data,
  //     author: userDetails.name + " " + userDetails.lastname,
  //     authorId: userDetails.userId,
  //     title: "firsttitle",
  //   });

  //   form.reset();
  // };

  // const onClick = () => {
  //   append({
  //     question: "",
  //     option1: "",
  //     option2: "",
  //     option3: "",
  //     correctOption: "",
  //   });
  // };

  return (
    <div></div>
    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onSubmit)}
    //     className="space-y-8 rounded-md"
    //   >
    //     {fields.map((question, index) => (
    //       <QuestionForm
    //         key={question.id}
    //         control={form.control}
    //         index={index}
    //       />
    //     ))}

    //     <div className="flex justify-between">
    //       <Button type="submit" className="hover:bg-yellow">
    //         Submit
    //       </Button>
    //       <Button
    //         type="button"
    //         onClick={onClick}
    //         className="bg-yellow hover:bg-nav-grey"
    //       >
    //         Add Question
    //       </Button>
    //     </div>
    //   </form>
    // </Form>
  );
};

export default AddQuestionForm;
