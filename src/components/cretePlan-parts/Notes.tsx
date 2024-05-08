import { Icon } from "@iconify/react/dist/iconify.js";

function Notes() {
  return (
    <div className="col-span-4 gap-4 row-span-4 bg-gray-200 rounded-md opacity-70 flex flex-col items-start p-4">
      <h2>یادداشت :</h2>
      <div className="flex gap-4 items-end">
        <textarea rows={8} cols={42} className="outline-none rounded-lg p-4" />
        <button className="w-10 h-10 flex justify-center shadow-md shadow-gray-700 items-center rounded-lg bg-gray-300">
          <Icon icon="noto:check-mark" />
        </button>
      </div>
    </div>
  );
}

export default Notes;
