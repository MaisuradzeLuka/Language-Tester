import UserDetails from "@/components/forms/UserDetails";

import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const userDetails = {
    userId: user?.id,
    name: user?.username || "",
    lastname: user?.lastName || "",
  };

  return (
    <div className="w-1/2 bg-nav-grey p-8 rounded-xl">
      <h1 className="text-yellow text-2xl font-semibold text-center mb-12">
        დაასრულე ავტორიზაცია
      </h1>

      <UserDetails userDetails={userDetails} />
    </div>
  );
};

export default page;
