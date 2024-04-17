import Button from "@/components/Button";
import SwitchInput from "@/components/SwitchInput";

const page = () => {
  return (
    <main className=" bg-milky-white min-h-screen px-2 py-20">
      <form className="flex flex-col gap-32 bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        <SwitchInput />
        <SwitchInput />
        <SwitchInput />
        <SwitchInput />

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
