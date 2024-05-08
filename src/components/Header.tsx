import { Icon } from '@iconify/react';
function Header() {
  return <div className="col-span-10 row-span-2 opacity-70 flex justify-center py-4 px-10 ">
    <div className="w-full h-20 bg-gradient-to-l from-gray-950 to-[#4c4153] rounded-xl px-20 flex items-center justify-between">
    <Icon icon="logos:reactivex" className='text-5xl '/>
    <h2 className='text-fuchsia-600 text-3xl header '>Daily Planner</h2>
    <Icon icon="et:profile-male" className='text-5xl text-fuchsia-600'/>
    </div>
  </div>;
}

export default Header;
