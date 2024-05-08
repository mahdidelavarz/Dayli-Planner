import { Icon } from "@iconify/react/dist/iconify.js";
import { Checkbox } from "@nextui-org/react";

function SideBar() {
  return (
    <div className="col-span-2 row-span-12 bg-gray-200 rounded-md opacity-80 flex flex-col gap-6 p-2">
      <div className="w-full h-auto  flex gap-2 items-center">
        <Icon icon="streamline-emojis:sun-with-face" className="text-3xl" />
        <span className="text-sm">ساعت بیداری :</span>
        <span className="w-20 h-8 shadow-md shadow-gray-700 rounded-md bg-gray-500 flex justify-center items-center text-white">
          - - : - -
        </span>
      </div>
      <div className="w-full flex flex-col gap-8">
        <Checkbox>
          <div className="flex gap-2 items-center ">
            <Icon
              icon="healthicons:exercise-yoga-outline"
              className="text-2xl mr-2 text-purple-500"
            />
            <span>ورزش</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon
              icon="fluent:food-egg-16-regular"
              className="text-yellow-400 text-2xl mr-2"
            />
            <span>صبحانه</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon
              icon="game-icons:toothbrush"
              className="text-2xl text-blue-500 mr-2"
            />
            <span>مسواک</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon
              icon="healthicons:fruits-outline"
              className="mr-2 text-green-500 text-2xl"
            />
            <span>تغذیه روز</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon
              icon="arcticons:foodora"
              className="text-2xl mr-2 text-pink-500"
            />
            <span>نهار و استراحت</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon
              icon="game-icons:black-book"
              className="text-2xl mr-2 text-stone-700"
            />
            <span>مطالعه</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon
              icon="fluent:food-apple-20-regular"
              className="text-red-500 text-2xl mr-2"
            />
            <span>میان وعده</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon icon="arcticons:movielab" className="text-2xl mr-2" />
            <span>فیلم</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon
              icon="solar:gamepad-broken"
              className="text-2xl mr-2 text-purple-500"
            />
            <span>اینترنت/بازی</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex items-center gap-2">
            <Icon icon="ep:food" className="text-2xl mr-2" />
            <span>شام و استراحت</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon icon="arcticons:personal-stuff" className="text-2xl mr-2" />
            <span>آماده سازی وسایل</span>
          </div>
        </Checkbox>
        <Checkbox>
          <div className="flex gap-2 items-center">
            <Icon
              icon="game-icons:toothbrush"
              className="text-2xl text-blue-500 mr-2"
            />
            <span>مسواک</span>
          </div>
        </Checkbox>
      </div>
      <div className="h-48"></div>
      <div className="w-full h-auto  flex gap-2 items-center mt-12 ">
        <Icon icon="noto:first-quarter-moon-face" className="text-3xl" />
        <span>ساعت خواب :</span>
        <span className="w-20 h-8 shadow-md shadow-gray-700 rounded-md bg-gray-500 flex justify-center items-center text-white">
          - - : - -
        </span>
      </div>
    </div>
  );
}

export default SideBar;
