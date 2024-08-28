import { Icon } from "@iconify/react/dist/iconify.js";
import { Checkbox } from "@nextui-org/react";

function Mood() {
  return (
    <div className="col-span-4 row-span-2 bg-white opacity-60 rounded-lg flex flex-col items-start gap-2 p-4">
      <h2>حال امروز :</h2>
      <div className="flex flex-col gap-4 text-3xl ">
        <div className="flex gap-5">
          <div className="flex">
            <Icon icon="twemoji:nerd-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:neutral-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:pensive-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:yawning-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:enraged-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:crying-face" />
            <Checkbox></Checkbox>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex">
            <Icon icon="twemoji:partying-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:drooling-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:grinning-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:smiling-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:relieved-face" />
            <Checkbox></Checkbox>
          </div>
          <div className="flex">
            <Icon icon="twemoji:sneezing-face" />
            <Checkbox></Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mood;
