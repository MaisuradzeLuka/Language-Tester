import Button from "@/components/Button";
import SwitchInput from "@/components/SwitchInput";
import { getData } from "@/lib/Actions";

const page = async () => {
  const [data] = await getData();

  return (
    <main className=" bg-milky-white min-h-screen px-2 py-20">
      <form className="flex flex-col gap-32 bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        {data.map((question, i) => (
          <SwitchInput key={i} data={question} />
        ))}

        <Button
          title="დასრულება"
          variant="bg-yellow text-white self-end"
          type="submit"
        />
      </form>
    </main>
  );
};

export default page;
