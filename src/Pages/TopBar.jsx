import { Button } from "@chakra-ui/react";
import Logo from "../assets/LeetCode_logo.png";
import { Link } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaBars } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import Stopwatch from "../Componets/Timer/Stopwatch";


const TopBar = ({ boolValue, isTimerVisible, handleClockStatus }) => {
  return (
    <>
      <div className=" w-full bg-[#282828] sticky top-0">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </div>

          <div className=" flex items-center justify-center">
            {boolValue ? (
              <div className="flex items-center justify-center px-3 py-1">
                <GrFormPrevious
                  color="white"
                  className="h-7 w-7 bg-[#464646] mx-2 rounded-sm cursor-pointer"
                />
                <Link to="/home">
                  <FaBars color="white" />
                </Link>

                <h1 className="text-white capitalize px-3 font-semibold">
                  problem list
                </h1>
                <GrFormNext
                  color="white"
                  className="h-7 w-7 bg-[#464646] mx-2 rounded-sm cursor-pointer"
                />
              </div>
            ) : null}

            {/* clock icon */}
            {
              boolValue && (!isTimerVisible ? <Stopwatch handleClockStatus={handleClockStatus}  /> : null)
            }

            {
              isTimerVisible ? (<FcAlarmClock onClick={handleClockStatus} className="h-6 w-6" />) : null
            }
          </div>
          
          <div className="buttonAndLogin px-3 mx-2">
            <Button backgroundColor="#3E3D3D" color="orange">
              buy me a coffe
            </Button>
            <Button className="mx-1">sign in</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
