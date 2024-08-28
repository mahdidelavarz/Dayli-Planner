import { Icon } from "@iconify/react/dist/iconify.js";

function SportsPlan() {
  return (
    <div className="col-span-6 row-span-5 bg-gray-200 rounded-md opacity-70 flex flex-col p-4 items-start relative">
      <div className="w-full flex gap-4 items-center justify-between">
        <h2>برنامه ی ورزشی :</h2>
        <div className="flex gap-4">
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
      <div className="absolute bottom-0 left-0 flex gap-2 items-center">
        <h3>مجموع کالری :</h3>
        <div className="w-28 h-14 bg-white m-2 relative rounded-lg ">
          <span className="w-5 h-5 bg-gray-700 absolute text-white top-1 right-1 rounded-full">
            +
          </span>
          <span className="w-5 h-5 bg-gray-700 absolute text-white bottom-1 right-1 rounded-full">
            -
          </span>
        </div>
      </div>
      <Icon
        icon="noto:bicycle"
        className="absolute right-4 bottom-0 text-[6rem]"
      />
    </div>
  );
}

export default SportsPlan;
