const page = () => {
  return (
    <main className=" bg-milky-white min-h-screen px-2 py-20">
      <div className="flex flex-col gap-32 bg-white mx-auto border border-gray-200 rounded-md px-4 py-8 lg:w-[960px]">
        <p>ტესტი დასრულებლია</p>

        <p>
          სწორუ პასუხი: <span>2</span>/10
        </p>

        <p>
          არასწორი პასუხი: <span>8</span>/10
        </p>
      </div>
    </main>
  );
};

export default page;
