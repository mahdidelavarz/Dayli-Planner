import { Icon } from "@iconify/react/dist/iconify.js";

function DoneWorks() {
  return (
    <div className="col-span-4 row-span-5 bg-white rounded-lg opacity-70 p-4">
      <div className="flex gap-4 items-center">
        <span>کار های انجام شده :</span>
        <input
          className="min-w-[15rem] h-10 shadow-md shadow-gray-700 rounded-md bg-gray-300 flex justify-center items-center text-fuchsia-950 outline-none px-4"
          placeholder="I will not stop ..."
        />
        <button className="w-10 h-10 flex justify-center shadow-md shadow-gray-700 items-center rounded-lg bg-gray-300">
          <Icon icon="noto:check-mark" />
        </button>
      </div>
    </div>
  );
}

export default DoneWorks;
