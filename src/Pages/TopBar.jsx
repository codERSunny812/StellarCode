/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import Logo from "../assets/LeetCode_logo.png";
import { Link } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaBars } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import Stopwatch from "../Componets/Timer/Stopwatch";
import { auth } from "../supabase";
import { useEffect } from "react";
// import { SessionContext } from "../Context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import UserStatusDropDown from "../Componets/DropDown/UserStatusDropDown";

const TopBar = ({ boolValue, isTimerVisible, handleClockStatus }) => {
  const [userState, setUserState] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  // check the status of the user's
  useEffect(() => {
    getLoginState();
    
  }, []);

  const getLoginState = async () => {
    const { user } = auth.getSession();
    setUserState(!user); // Set userState based on whether a user is present in the session

    const unsubscribe = auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUserState(true);
      } else if (event === "SIGNED_OUT") {
        setUserState(false);
      }
    });

    return () => unsubscribe();
  };

  // console.log(userState);

  const handleMouseClick = () => {
    {
      showDropDown ? setShowDropDown(false) : setShowDropDown(true)
    }
   
  };


  return (
    <>
      <div className=" w-full bg-[#282828] sticky top-0">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img src={Logo}  className="md:h-[48px] md:w-[48px] h-10"/>
            </Link>
          </div>

          <div className=" flex items-center justify-center">
            {boolValue ? (
              <div className="flex items-center justify-center px-3 py-1">
                <GrFormPrevious
                  color="white"
                  className="h-7 w-7 bg-[#464646] mx-2 rounded-sm cursor-pointer"
                />
                <Link to="/problemset">
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
            {boolValue &&
              (!isTimerVisible ? (
                <Stopwatch handleClockStatus={handleClockStatus} />
              ) : null)}

            {isTimerVisible ? (
              <FcAlarmClock onClick={handleClockStatus} className="h-6 w-6" />
            ) : null}
          </div>

          <div className="border-2 border-white buttonAndLogin md:px-3 md:mx-2 flex items-center">
            <Button backgroundColor="#3E3D3D" color="orange" className="md:w-[143px] md:h-[40px] w-[120px]  md:text-[16px] ">
              buy me a coffe
            </Button>

            <div
              onClick={handleMouseClick}
            >
              {userState ? (
                <>
                  <FaRegUserCircle color="white" className="h-8 w-8 mx-2" />
                  {
                    showDropDown && <UserStatusDropDown/>
                  }
                </>
              ) : (
                <Link to="/login">
                  <Button className="mx-1">sign in</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
