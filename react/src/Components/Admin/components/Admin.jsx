import SideBar from "./SideBar";
import Header from "./Header";
import Table from "./Table";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Admin = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex justify-between  ">
      <p className=" absolute pl-4 xl:hidden"><GiHamburgerMenu onClick={toggleSidebar} size={20} className=" mt-[7rem]" /></p>
      <SideBar toggleSidebar={toggleSidebar} showSidebar={showSidebar} /> 
      <div className="w-full  xl:w-[80%] ml-auto p-4">
        <Header />
        <Table />
      </div>
    </div>
  );
};

export default Admin;
