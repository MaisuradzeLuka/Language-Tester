"use client";

import { IQuestion } from "@/types";
import { useState } from "react";

const list = [
  { id: 1, number: "a.", answer: "  Some kind of answer number 1" },
  { id: 2, number: "b.", answer: "  Some kind of answer number 2" },
  { id: 3, number: "c.", answer: "  Some kind of answer number 3" },
];

interface ISwitchInput {
  data: IQuestion;
}

const SwitchInput = ({ data }: ISwitchInput) => {
  const [selectedItem, setSelectedItem] = useState(0);

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
          {data?.options.map((option) => (
            <li
              className={`flex items-end gap-2 cursor-pointer ${
                option.id === selectedItem ? "text-yellow" : ""
              }`}
              key={option.id}
              value={option.id}
              onClick={() => setSelectedItem(option.id)}
            >
              <span className="text-xl w-6">{option?.nthOption}</span>
              <div
                className={`text-xl rounded-md px-4 py-2 border ${
                  option.id === selectedItem
                    ? "border-yellow"
                    : "border-gray-600"
                }`}
              >
                {option?.option}
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default SwitchInput;
