import SideBar from "./SideBar";
import DateOfPlan from "./DateOfPlan";
import DoneWorks from "./DoneWorks";
import SportsPlan from "./SportsPlan";
import Notes from "./Notes";
import ReadBooks from "./ReadBooks";
import Expenditures from "./Expenditures";
const NewPlanModal = () => {
  return (
    <div className="w-full h-auto">
      <img
        src="/images/galaxy-3608029_1920.jpg"
        alt="bg"
        className="w-full h-fill object-cover"
      />
      <div className="w-full h-full absolute top-0 right-0 bg-gray-950 opacity-30"></div>
      <form action="">
        <div className=" absolute top-0 right-0 ">
          <div className="w-full h-[150vh] grid grid-cols-12 grid-rows-12 gap-2">
            <SideBar />

            <DateOfPlan />
            <DoneWorks />
            <SportsPlan />
            <Notes />
            <ReadBooks />
            <Expenditures />
          </div>
          {/* <div className="col-span-4 row-span-4 bg-gray-200 rounded-md opacity-70">
              expendichers expenditure
            </div> */}
          {/* <div className="w-full h-auto grid-cols-12 grid-rows-12 grid">
            <div className="col-span-2 row-span-4 bg-gray-200 rounded-md opacity-70">
              water
            </div>

            <div className="col-span-6 row-span-3 bg-gray-200 rounded-md opacity-70">
              for tomorrow
            </div>
            <div className="col-span-5 row-span-1 bg-gray-200 rounded-md opacity-70">
              mod
            </div>
            <div className="col-span-5 row-span-1 bg-gray-200 rounded-md opacity-70">
              arzyaby
            </div>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default NewPlanModal;
