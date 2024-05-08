import { Icon } from "@iconify/react";
function SideBar() {
  return (
    <div className="col-span-2 row-span-12 py-4 pr-4">
      <div className="w-full h-full opacity-70 rounded-xl ">
      <div className="w-full bg-gray-950  p-4 py-10 rounded-xl">
        <div className="text-gray-800 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 font-medium rounded-md cursor-pointer  duration-300 bg-gray-400">
          <Icon icon="solar:home-2-broken" className="text-2xl" />
          <span className="mr-5 "> خانه</span>
        </div>
        <div className="text-gray-800 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 font-medium rounded-md cursor-pointer mt-12 duration-300 bg-gray-400">
        <Icon icon="solar:chart-square-broken" className="text-2xl"/>
          <span className="mr-5"> امار </span>
        </div>
        <div className="text-gray-800 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 font-medium rounded-md cursor-pointer mt-12 duration-300 bg-gray-400">
        <Icon icon="fluent:form-new-20-regular" className="text-3xl"/>
          <span className="mr-5"> پلن جدید </span>
        </div>
        <div className="text-gray-800 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 font-medium rounded-md cursor-pointer mt-12 duration-300 bg-gray-400">
        <Icon icon="game-icons:focused-lightning" className="text-2xl"/>
          <span className="mr-5 "> تمرکز </span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SideBar;
