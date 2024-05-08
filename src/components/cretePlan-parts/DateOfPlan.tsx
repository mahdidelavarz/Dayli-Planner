function DateOfPlan() {
  return (
    <div className="col-span-10 row-span-1 bg-gray-200 rounded-md opacity-70 flex items-center justify-between px-4 ">
      <div className="flex gap-12">
        <div className="flex gap-4 items-center">
          <span>روز :</span>
          <span className="w-28 h-8 shadow-md shadow-gray-700 rounded-md bg-gray-500 flex justify-center items-center text-white">
            شنبه
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span>تاریخ :</span>
          <span className="w-28 h-8 shadow-md shadow-gray-700 rounded-md bg-gray-500 flex justify-center items-center text-white ">
            1403/01/01
          </span>
        </div>
      </div>
      <button className="px-12 py-2 bg-green-700 text-white rounded-md">
        ثبت پلن
      </button>
    </div>
  );
}

export default DateOfPlan;
