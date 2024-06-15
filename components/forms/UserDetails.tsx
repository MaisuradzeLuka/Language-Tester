"use client";

// prettier-ignore
import {
    FormField, FormItem, FormLabel, FormControl, FormMessage, Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateUser } from "@/lib/actions/user.actions";
import { userSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

interface IUserDetails {
  userId: string;
  name: string;
  lastname: string;
}

const UserDetails = ({ userDetails }: { userDetails: IUserDetails }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: userDetails?.name || "",
      lastname: userDetails?.lastname || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof userSchema>) => {
    await updateUser({
      userId: userDetails.userId,
      lastname: values.lastname,
      name: values.name,
    });

    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-white text-lg font-medium"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 ">
              <FormLabel className="text-2xl font-semibold border-none">
                სახელი
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="bg-profile-input outline-none text-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 mt-12">
              <FormLabel className="text-2xl font-semibold border-none">
                გვარი
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="bg-profile-input outline-none text-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className=" bg-yellow mt-14 font-semibold">დასრულება</Button>
      </form>
    </Form>
  );
};

export default UserDetails;
