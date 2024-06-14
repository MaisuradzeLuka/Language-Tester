"use client";

// prettier-ignore
import {
  FormField, FormItem, FormLabel, FormControl, FormMessage, Form,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { questionSchema } from "@/lib/validation";

const page = () => {
  const form = useForm({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      correctOption: "",
    },
  });

  const onSubmit = () => {};

  return (
    <section className=" bg-milky-white min-h-screen px-2 py-20">
      <div className="flex flex-col gap-12 bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        <h1 className=" text-yellow text-4xl font-semibold text-center">
          Add questions
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" space-y-8 rounded-md"
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 ">
                  <FormLabel className="text-xl font-medium border-none">
                    Question
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-profile-input outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="text-xl font-medium border-none -mb-2">Options</h3>

            <RadioGroup className="flex justify-between">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="1" id="option-one" />
                <FormField
                  control={form.control}
                  name="option1"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2 ">
                      <FormControl>
                        <Input
                          type="text"
                          className="bg-profile-input outline-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem value="2" id="option-two" />
                <FormField
                  control={form.control}
                  name="option2"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2 ">
                      <FormControl>
                        <Input
                          type="text"
                          className="bg-profile-input outline-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem value="3" id="option-three" />
                <FormField
                  control={form.control}
                  name="option3"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2 ">
                      <FormControl>
                        <Input
                          type="text"
                          className="bg-profile-input outline-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </RadioGroup>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default page;
