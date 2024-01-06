import { useState } from "react";
import { CiHome } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineBarChart } from "react-icons/md";
import { BiLogoGithub } from "react-icons/bi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = ({ toggleSidebar, showSidebar }) => {
  const [show, setShow] = useState(true);

  const handleclick = () => setShow(!show);
  return (
    <>
      {showSidebar === true ? (
        <div
          
          className=" bg-[#0000007a] z-40  xl:hidden   w-full fixed h-[100vh]"
        >
          
          <div className=" w-[100%] xl:hidden sm:w-[50%] md:w-[40%] xl:w-[20%]  fixed h-[100vh] items-center text-white  bg-[#161515]">
         
            <div className="flex flex-col relative items-center justify-between ">
            <p
            onClick={toggleSidebar}
            className="text-white xl:hidden absolute    top-[11rem] z-20 right-0 sm:right-[-1rem]"
          >
            <FiArrowLeftCircle size={40} className="" />{" "}
          </p>
              <div className="flex h-full py-12 text-left">
                <BiLogoGithub size={100} />
              </div>
              <div className="border-t-[1px] text-center pt-5  space-y-10 w-full border-white">
                <div className=" cursor-pointer  w-[90%] bg-[white] text-black py-3 rounded-r-3xl  ">
                  <div className="flex  pl-2 w-[45%] items-center text-left justify-between">
                    <CiHome size={30} />
                    <p>Home</p>
                  </div>
                </div>
                <div>
                  <div className=" w-[90%] bg-orange-400   py-3 rounded-r-3xl ">
                    <div className="flex cursor-pointer text-left align-middle items-center justify-between w-[80%]  pl-2">
                      <MdOutlineBarChart size={30} />
                      <p>My Space</p>
                      <i onClick={handleclick}>
                        {show ? (
                          <IoIosArrowDown size={30} />
                        ) : (
                          <IoIosArrowUp size={30} />
                        )}
                      </i>
                    </div>
                  </div>
                  {!show ? (
                    <div className=" flex flex-col  items-center text-left">
                      <ul className="space-y-3 cursor-pointer ">
                        <li className="hover:text-orange-400">Leave</li>
                        <li className="hover:text-orange-400">Attendance</li>
                        <li className="hover:text-orange-400">Performance</li>
                        <li className="hover:text-orange-400">
                          Expenses & Travel
                        </li>
                        <li className="hover:text-orange-400"> Help Desk</li>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
      <div className=" z-40 w-[100%] shadow-inner hidden xl:block sm:w-[50%] md:w-[30%] xl:w-[20%]  fixed h-[100vh] items-center text-white  bg-[#161515]">
        <div className="flex flex-col relative items-center justify-between ">
         

          <div className="flex h-full py-12 text-left">
            <BiLogoGithub size={100} />
          </div>
          <div className="border-t-[1px] text-center pt-5  space-y-10 w-full border-white">
            <div className=" cursor-pointer  w-[90%] bg-[white] text-black py-3 rounded-r-3xl  ">
              <div className="flex  pl-2 w-[45%] items-center text-left justify-between">
                <CiHome size={30} />
                <p>Home</p>
              </div>
            </div>
            <div>
              <div className=" w-[90%] bg-orange-400   py-3 rounded-r-3xl ">
                <div className="flex cursor-pointer text-left align-middle items-center justify-between w-[80%]  pl-2">
                  <MdOutlineBarChart size={30} />
                  <p>My Space</p>
                  <i onClick={handleclick}>
                    {show ? (
                      <IoIosArrowDown size={30} />
                    ) : (
                      <IoIosArrowUp size={30} />
                    )}
                  </i>
                </div>
              </div>
              {!show ? (
                <div className=" flex flex-col  items-center text-left">
                  <ul className="space-y-3 cursor-pointer ">
                    <li className="hover:text-orange-400">Leave</li>
                    <li className="hover:text-orange-400">Attendance</li>
                    <li className="hover:text-orange-400">Performance</li>
                    <li className="hover:text-orange-400">Expenses & Travel</li>
                    <li className="hover:text-orange-400"> Help Desk</li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
