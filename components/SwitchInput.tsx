"use client";

//prettier-ignore
import { doc, updateDoc, arrayUnion, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/lib/ConnectToDb";
import { IQuestion } from "@/types";
import { useEffect, useState } from "react";
import { getUserId } from "@/lib/Actions";
import Button from "./shared/Button";

interface ISwitchInput {
  data: IQuestion;
}

const SwitchInput = ({ data }: ISwitchInput) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [userId, setUserId] = useState("");

  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : false;

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await getUserId(user, "id");

      if (typeof id === "string") {
        setUserId(id);
      }
    };

    fetchUserId();
  }, []);

  const onValueChange = async () => {
    !isDisabled &&
      (await updateDoc(doc(db, "users", userId), {
        ans: arrayUnion(selectedItem),
      }));

    setIsDisabled(true);
  };

  return (
    <div>
      <h3 className="flex items-center gap-3 text-2xl text-gray-700">
        <span className="flex justify-center items-center text-lg font-semibold bg-yellow text-white w-8 h-8 rounded-full">
          {data?.nthQuestion}
        </span>
        {data?.question}
      </h3>

      {
        <ul className="flex flex-col gap-4 mt-6 ml-4 text-gray-600">
          {data?.options.map((option) => {
            const canChangeColor = option.id === selectedItem && !isDisabled;

            return (
              <li
                className={`flex items-end gap-2 cursor-pointer ${
                  canChangeColor ? "text-yellow" : " "
                }`}
                key={option.id}
                value={option.id}
                onClick={() => setSelectedItem(option.id)}
              >
                <span className="text-xl w-6">{option?.nthOption}</span>
                <div
                  className={`text-xl rounded-md px-4 py-2 border ${
                    canChangeColor ? "border-yellow" : "border-gray-600"
                  }`}
                >
                  {option?.option}
                </div>
              </li>
            );
          })}

          <Button
            title="პასუხი"
            variant={`self-start ${
              isDisabled ? "bg-gray-400 text-gray-700" : "bg-yellow text-white"
            }`}
            type="button"
            onClick={onValueChange}
            disabled={isDisabled}
          />
        </ul>
      }
    </div>
  );
};

export default SwitchInput;
