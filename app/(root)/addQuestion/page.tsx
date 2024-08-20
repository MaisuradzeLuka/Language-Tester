import AddQuestionForm from "@/components/forms/AddQuestionForm";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  // const user = await currentUser();

  // if (!user) return null;

  // const userInfo = await fetchUser(user.id);

  // const userDetails = {
  //   userId: user?.id,
  //   name: userInfo ? userInfo?.name : user.firstName ?? "",
  //   lastname: userInfo ? userInfo?.lastname : user.lastName ?? "",
  // };

  return (
    <section className="bg-milky-white min-h-screen px-2 py-20">
      <div className="flex flex-col gap-12 bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        <h1 className="text-yellow text-4xl font-semibold text-center">
          Add questions
        </h1>

        {/* <AddQuestionForm userDetails={userDetails} /> */}
      </div>
    </section>
  );
};

export default Page;
