import Button from "@/components/shared/Button";
import SwitchInput from "@/components/SwitchInput";
import Link from "next/link";

const page = async () => {
  // const [questionsData] = await getData();

  return (
    <main className=" bg-milky-white min-h-screen px-2 py-20">
      <form className="flex flex-col gap-32 bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        {/* {questionsData.map((question, i) => (
          <SwitchInput key={i} data={question} />
        ))} */}

        <Link href="results" className="self-end">
          <Button
            title="დასრულება"
            variant="bg-yellow text-white"
            type="submit"
          />
        </Link>
      </form>
    </main>
  );
};

export default page;
