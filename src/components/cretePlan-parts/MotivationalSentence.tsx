import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

function MotivationalSentence() {
  const [sentenceValue, setSentenceValue] = useState("");
  const [state, setState] = useState(false);
  const saveValue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    valueState: boolean
  ) => {
    e.preventDefault();
    setState(valueState);
    console.log(valueState, "this is ");
  };
  return (
    <div className="col-span-6 row-span-1 bg-gray-200 rounded-md opacity-70 flex items-start p-4 ">
      <div className="flex gap-4 items-center">
        <span>جمله ی انگیزشی امروز :</span>
        {!state ? (
          <input
            value={sentenceValue}
            className="min-w-[29rem] h-10 shadow-md shadow-gray-700 rounded-md bg-gray-300 flex justify-center items-center text-fuchsia-950 outline-none px-4"
            placeholder="I will not stop ..."
            onChange={(e) => setSentenceValue(e.target.value)}
          />
        ) : (
          <div className="min-w-[29rem] h-10  rounded-md bg-gray-200 flex justify-center items-center text-fuchsia-950 outline-none px-4">
            {sentenceValue}
          </div>
        )}
        {!state ? (
          <button
            className="w-10 h-10 flex justify-center shadow-md shadow-gray-700 items-center rounded-lg bg-gray-300"
            onClick={(e) => saveValue(e, true)}
          >
            <Icon icon="noto:check-mark" />
          </button>
        ) : (
          <button
            className="w-10 h-10 flex justify-center shadow-md shadow-gray-700 items-center rounded-lg bg-gray-300"
            onClick={(e) => saveValue(e, false)}
          >
            <Icon icon="tabler:edit" className="text-2xl text-purple-900" />
          </button>
        )}
      </div>
    </div>
  );
}

export default MotivationalSentence;
