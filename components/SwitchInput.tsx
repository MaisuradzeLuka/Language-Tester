"use client";

import { useState } from "react";

const list = [
  { id: 1, number: "a.", answer: "  Some kind of answer number 1" },
  { id: 2, number: "b.", answer: "  Some kind of answer number 2" },
  { id: 3, number: "c.", answer: "  Some kind of answer number 3" },
];

interface ISwitchInput {}

const SwitchInput = ({}: ISwitchInput) => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div>
      <h3 className="flex items-center gap-3 text-2xl text-gray-700">
        <span className="flex justify-center items-center text-lg font-semibold bg-yellow text-white w-8 h-8 rounded-full">
          1
        </span>
        Some kind of long question
      </h3>

      <ul className="flex flex-col gap-4 mt-6 ml-4 text-gray-600">
        {list.map((listItem) => (
          <li
            className={`flex items-end gap-2 cursor-pointer ${
              listItem.id === selectedItem ? "text-yellow" : ""
            }`}
            key={listItem.id}
            value={listItem.id}
            onClick={() => setSelectedItem(listItem.id)}
          >
            <span className="text-xl w-6">{listItem.number}</span>
            <div
              className={`text-xl rounded-md px-4 py-2 border ${
                listItem.id === selectedItem
                  ? "border-yellow"
                  : "border-gray-600"
              }`}
            >
              {listItem.answer}
            </div>
          </li>
        ))}

        {/* <li className="flex items-end gap-2 ">
          <span className="text-xl w-6">b.</span>
          <div className="border border-gray-600 text-xl rounded-md px-4 py-2">
            Some kind of answer number 2
          </div>
        </li>

        <li className="flex items-end gap-2 ">
          <span className="text-xl w-6">c.</span>
          <div className="border border-gray-600 text-xl rounded-md px-4 py-2">
            Some kind of answer number 3
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default SwitchInput;
