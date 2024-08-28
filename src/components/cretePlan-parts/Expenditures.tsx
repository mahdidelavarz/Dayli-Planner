import { Icon } from "@iconify/react/dist/iconify.js";

function Expenditures() {
  return (
    <div className="col-span-6 row-span-5 bg-gray-200 rounded-md opacity-70 flex items-start justify-between gap-2 p-4">
      <div className="flex items-center gap-4">
        <h2>خرج و مخارج :</h2>
        <input
          className="min-w-[18rem] h-10 shadow-md shadow-gray-700 rounded-md bg-gray-300 flex justify-center items-center text-fuchsia-950 outline-none px-4"
          placeholder="I will not stop ..."
        />

        <input
          type="number"
          className="w-32 h-10 shadow-md shadow-gray-700 rounded-md bg-gray-300 flex justify-center items-center text-fuchsia-950 outline-none px-4"
        />
        <span>تومان</span>
      </div>
        <button className="w-10 h-10 flex justify-center shadow-md shadow-gray-700 items-center rounded-lg bg-gray-300">
          <Icon icon="noto:check-mark" />
        </button>
    </div>
  );
}

export default Expenditures;
