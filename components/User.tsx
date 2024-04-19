"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { addUser } from "@/lib/Actions";

const User = () => {
  const router = useRouter();

  const [nameValue, setNameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameValue && !lastnameValue) {
      setHasError(true);
    } else {
      setIsLoading(true);
      setHasError(false);
      router.push("/content");
      addUser(nameValue, lastnameValue);
      setNameValue("");
      setLastnameValue("");
    }
  };

  return (
    <form
      className="flex flex-col gap-6 w-full xs:w-[500px] border border-gray-200 p-8 rounded-md bg-white"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name">სახელი</label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-500 py-2 px-4 rounded-xl text-md outline-none focus:border-yellow "
          onChange={(e) => setNameValue(e.target.value.trim())}
          value={nameValue}
        />
      </div>

      <div className="flex flex-col ">
        <label htmlFor="lastname">გვარი</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="border border-gray-500 py-2 px-4 rounded-xl text-md outline-none focus:border-yellow "
          onChange={(e) => setLastnameValue(e.target.value.trim())}
          value={lastnameValue}
        />
      </div>

      {hasError && <p className="text-red-600">შეიყვანე სახელი და გვარი</p>}
      <Button
        title={isLoading ? "იტვირთება..." : "დაწყება"}
        variant="text-white bg-yellow w-1/2 self-center mt-2"
        type="submit"
      />
    </form>
  );
};

export default User;
