import React, { ReactNode } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
type Provider = {
  children: ReactNode;
};
const Layout: React.FC<Provider> = ({ children }) => {
  return (
    <div>
      <div className="w-full h-auto relative">
        <img
          src="/images/galaxy-3608029_1920.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full bg-stone-950 opacity-30 absolute top-0 right-0"></div>
        <div className="w-full h-full absolute top-0 right-0 left-0 grid grid-cols-12 grid-rows-12">
          <SideBar />
          <Header />
          <div className="col-span-10 row-span-10 px-10 pb-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
