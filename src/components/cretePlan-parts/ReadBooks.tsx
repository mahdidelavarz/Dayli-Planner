import { Icon } from "@iconify/react/dist/iconify.js";

function ReadedBooks() {
  return (
    <div className="col-span-6 row-span-1 bg-gray-200 rounded-md opacity-70 flex px-2">
      <div className="flex gap-4 items-center">
        <h2 className="text-sm">کتاب امروز و مدت مطالعه :</h2>
        <input
          className="min-w-[22rem] h-10 shadow-md shadow-gray-700 rounded-md bg-gray-300 flex justify-center items-center text-fuchsia-950 outline-none px-4"
          placeholder="I will not stop ..."
        />
        <span className="w-24 h-10 shadow-md shadow-gray-700 rounded-md bg-gray-300 flex justify-center items-center text-fuchsia-950 ">
          - - : - -
        </span>
        <button className="w-10 h-10 flex justify-center shadow-md shadow-gray-700 items-center rounded-lg bg-gray-300">
          <Icon icon="noto:check-mark" />
        </button>
      </div>
    </div>
  );
}

export default ReadedBooks;
