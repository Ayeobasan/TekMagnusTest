import { GiPieChart } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { TbBell } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";

const Header = () => {
  //   const glassStyle = {
  //     background:
  //       "radial-gradient(circle,rgba(255,255,255,0) 0%,  rgba(0,0,0,0.9) 20%)",
  //     // padding: "1rem",
  //     // borderRadius: "8px",
  //   };
  return (
    <div>
      <div className="flex justify-evenly md:w-[80%] m-auto mb-10">
        <div className="flex align-middle border-[0.5px] justify-between px-4 w-[40%] bg-transparent border-gray-500 shadow-inner h-10 rounded-xl items-center">
          <input
            type="search"
            placeholder="Search"
            className=" bg-transparent rounded-md w-[100%]  focus:outline-none focus:border-gray-100"
          />
          <div>
            <CiSearch />
          </div>
        </div>
        <div className="border h-10  p-1 rounded-xl relative">
          <div className="absolute right-0 top-0">
            <span className="relative  flex h-3 w-3">
              <span className="animate-ping absolute  inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <div>
            <TbBell size={30} />
          </div>
        </div>
        <div className="border  h-10  p-1 rounded-xl relative">
          <div className="absolute right-0 top-0">
            <span className="relative  flex h-3 w-3">
              <span className="animate-ping absolute  inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <div>
            <MdMailOutline size={30} />
          </div>
        </div>
        <div className="flex border rounded-full">
          <p className="bg-white rounded-s-full w-5 h-15"></p>
          <p className="bg-black rounded-e-full w-5 h-15"></p>
        </div>
        <div>
          {" "}
          <div className="border   rounded-full relative">
            <img
              className="rounded-full w-[40px]"
              src="https://cdn.discordapp.com/avatars/938028858807037983/cb41b6850faad5fe5eb46c142498a236.webp?size=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <p className="py-9">
        My Space / <span className=" text-yellow-600">Attendance</span>{" "}
      </p>
      <div className="border-[1px] bg-[rgba(21,21,21,0.34)] text-[#eceaea] border-white p-3 rounded">
        <table className="w-full ">
          <thead>
            <tr className="flex text-left   justify-between w-full">
              <th className="w-1/3 ">Attendance status</th>
              <th className="w-1/3 text-center ">Timings</th>
              <th className="w-1/3 text-center ">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between mt-5 gap-5 w-full">
              <td className="w-1/3">Last Week</td>
              <td className="w-1/3  ">
                <ul className="flex justify-between w-[70%] m-auto text-[10px] text-center">
                  <li className="rounded-full border border-[#ffffff44]  px-2.5 py-2">
                    M
                  </li>
                  <li className="rounded-full border border-[#ffffff44] px-3 py-2 text-blue-300">
                    T
                  </li>
                  <li className="rounded-full border border-[#ffffff44]  px-2.5 py-2 text-yellow-600">
                    W
                  </li>
                  <li className="rounded-full border border-[#ffffff44]  px-3 py-2 ">
                    T
                  </li>
                  <li className="rounded-full border border-[#ffffff44]  px-3 py-2">
                    F
                  </li>
                  <li className="rounded-full border border-[#ffffff44]  px-3 py-2 text-green-600">
                    S
                  </li>
                  <li className="rounded-full border border-[#ffffff44]  px-3 py-2 text-red-600">
                    S
                  </li>
                </ul>
              </td>
              <td className="w-1/3"></td>
            </tr>
          </tbody>
          <tbody>
            <tr className="grid grid-cols-2 xd:flex justify-between mt-5  gap-2 w-full">
              <td className="xd:w-[65%] shadow-xl flex  border px-2 border-[#dbdbdb41]">
                <div className="flex justify-between w-full  xd:w-[90%] m-auto">
                  <div className="flex align-middle  items-center">
                    <IoMdTime size={30} />
                    <p className="text-center pl-1 text-sm lg:text-md">
                      Avg hrs / Day <br />{" "}
                      <span className="text-[10px] lg:text-sm">
                        ( 6hrs 48m )
                      </span>
                    </p>
                  </div>
                  <div className="flex align-middle  items-center">
                    <GiPieChart size={30} className="text-green-600 " />
                    <p className="text-center text-sm lg:text-md pl-1 text-md">
                      On Time Arrival <br />{" "}
                      <span className="text-[10px] lg:text-sm">95%</span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="xd:w-[45%] flex justify-center items-center shadow-xl  border px-2 border-[#dbdbdb41]">
                <p className="text-center py-2 text-sm xd:text-md">
                  <p>Today (09:30Am - 6:30pm) </p>{" "}
                  <span className="text-[10px] lg:text-sm">
                    Duration: 9th 0m Brake 0m{" "}
                  </span>
                </p>
              </td>
              <td className="xd:w-[30%] flex justify-center items-center shadow-xl  border px-2 border-[#dbdbdb41]">
                <p className="text-center py-1 text-md">
                  <p className="text-xl xl:text-3xl">04:04:39 pm </p>
                  <span className="text-[10px] lg:text-sm">
                    Wed 06, Dec 2023{" "}
                  </span>
                </p>
              </td>

              <td className="xd:w-1/4 text-[12px] al py-0 space-y-1 text-black ">
                <button className="bg-orange-400 w-full rounded-lg p-2">
                  {" "}
                  Leave Request
                </button>
                <button className="bg-orange-400 w-full  rounded-lg p-2">
                  {" "}
                  Work from Home
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Header;
