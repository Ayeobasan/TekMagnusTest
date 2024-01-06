import { GiHamburgerMenu, GiPieChart } from "react-icons/gi";
import { FaCloudSunRain } from "react-icons/fa";
import { IoAlertCircleOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
const Table = () => {
  return (
    <div className="mt-10 border overflow-x-scroll w-full  rounded-lg ">
      <div className="md:flex py-2  justify-between px-3 w-[100%] align-middle items-center ">
        <h1 className="p-2 text-[12px] xd:text-sm">December, 2023</h1>
        <div className="sm:flex space-y-4  sm:space-y-0 justify-between md:w-[70%] xd:w-[85%] xl:w-[80%]">
          <div className="flex border rounded-[4px] w-[90%] sm:w-auto  text-[10px] xd:text-sm ">
            <p className=" p-2 bg-orange-400 rounded-l-[4px] px-4 xd:px-8">
              30 Days
            </p>
            <p className="border-x   p-2 xd:px-8">Nov</p>
            <p className="p-2 px-4 xd:px-8">Oct</p>
            <p className=" border-l p-2  px-4  xd:px-8">Sep</p>
            <p className="border-l p-2 px-4 xd:px-8">Aug</p>
            <p className="border-l p-2 px-4 xd:px-8">Jul</p>
            <p className="border-l p-2 px-4 xd:px-8">Jun</p>
          </div>
          <div className="flex    text-[10px] xd:text-sm  border rounded-[4px] text-sm">
            <p className="border-r bg-orange-400 rounded-l-[4px] px-4  p-2">
              <GiHamburgerMenu size={20} />
            </p>
            <p className=" px-4 p-2">
              <CiCalendar size={20} />
            </p>
          </div>
        </div>
      </div>
      <table className="   xd:text-base w-full">
        <thead>
          <tr>
            <th className="border-t border-b p-2 w-1/7">Data</th>
            <th className="border-t border-b p-2 w-1/7">Attendance Visual</th>
            <th className="border-t border-b p-2 w-1/7">Effective Hours</th>
            <th className="border-t border-b p-2 w-1/7">Gross Hours</th>
            <th className="border-t border-b p-2 w-1/7">Extral Hours</th>
            <th className="border-t border-b p-2 w-1/7">Arrival</th>
            <th className="border-t border-b p-2 w-1/7">Log</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          <tr className="bg-[#00000061]">
            <td className="border-b p-2 text-leftw-1/7  pl-10">Dec 04, Mon</td>
            <td className="border-b p-2">
              <div className="  flex items-center w-[70%] m-auto rounded-lg justify-center bg-green-500">
                <div className=" flex items-center w-10 m-auto h-full justify-between">
                  <div className=" w-2 h-6 bg-white "></div>
                  <div className=" w-2 h-6 bg-white"></div>
                </div>
              </div>
            </td>
            <td className="border-b  p-2">
              <p className="flex items-center align-middle  justify-between w-[60%]">
                <GiPieChart size={30} className="text-green-600 " />
                9h 15m
              </p>
            </td>
            <td className="border-b p-2">9h 59m</td>
            <td className="border-b p-2">0h 59m</td>
            <td className="border-b p-2">0n Time</td>
            <td className="border-b p-2">
              <IoAlertCircleOutline />
            </td>
          </tr>
          <tr>
            <td className="border-b p-2 text-left  pl-10">
              Dec 03, Mon{" "}
              <span className="bg-orange-400 px-1 rounded text-sm">W-Off</span>
            </td>
            <td className="border-b p-2 "> </td>
            <td className="border-b p-2 ">Full day Weekly-off </td>
            <td className="border-b p-2"> </td>
            <td className="border-b p-2"> </td>
            <td className="border-b p-2"></td>
            <td className="border-b p-2"> </td>
          </tr>
          <tr className="bg-[#00000061]">
            <td className="border-b p-2 text-left  pl-10">Dec 02, Mon</td>
            <td className="border-b p-2">
              {" "}
              <div className="  flex items-center w-[70%] m-auto rounded-lg justify-center bg-green-500">
                <div className=" flex items-center w-10 m-auto h-full justify-between">
                  <div className=" w-2 h-6 bg-white "></div>
                </div>
              </div>
            </td>
            <td className="border-b p-2 items-center align-middle ">
              <p className="flex items-center align-middle  justify-between w-[60%]">
                <GiPieChart size={30} className="text-green-600 " />
                8h 59m
              </p>
            </td>
            <td className="border-b p-2">9h 59m</td>
            <td className="border-b p-2">0h 30m</td>
            <td className="border-b p-2">😀</td>
            <td className="border-b p-2">✔</td>
          </tr>
          <tr className="bg-[#00000061]">
            <td className="border-b p-2 text-left  pl-10">Dec 01, Fri</td>
            <td className="border-b p-2">
              {" "}
              <div className="  flex items-center w-[70%] m-auto rounded-lg justify-center bg-green-500">
                <div className=" flex items-center w-[50%] m-auto h-full justify-between">
                  <div className=" w-2 h-6 bg-white "></div>
                  <div className=" w-1 h-6 bg-white"></div>
                  <div className=" w-2 h-6 bg-white"></div>
                </div>
              </div>
            </td>
            <td className="border-b p-2">
              <p className="flex items-center align-middle  justify-between w-[60%]">
                <GiPieChart size={30} className="text-green-600 " />
                8h 59m
              </p>
            </td>
            <td className="border-b p-2">9h 59m</td>
            <td className="border-b p-2">1h 30m</td>
            <td className="border-b p-2">
              <p className="flex items-center align-middle  justify-between w-[100%]">
                <FaCloudSunRain size={20} className="text-white " />
                0h 30m late
              </p>
            </td>
            <td className="border-b p-2">🕔</td>
          </tr>
          <tr className="bg-[#a753a649]">
            <td className="border-b p-2 text-left  pl-10">
              Dec 03, Mon{" "}
              <span className="bg-purple-600 px-1 rounded text-sm">Leave</span>
            </td>
            <td className="border-b p-2 "> </td>
            <td className="border-b p-2 ">Sick leave </td>
            <td className="border-b p-2"> </td>
            <td className="border-b p-2"> </td>
            <td className="border-b p-2"></td>
            <td className="border-b p-2"> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
