/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
import { useEffect, useState } from "react";
import TopBar from "../Pages/TopBar";
import axios from "axios";
import avtar from "../assets/avatar.png";
import { FaLocationDot, FaJava } from "react-icons/fa6";
import { FcKey, FcBinoculars, FcCollaboration, FcLinux } from "react-icons/fc";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { PiFireFill } from "react-icons/pi";
import { auth } from "../supabase";

const Profile = () => {
  const [name, setName] = useState("");
  const [rank, setRank] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [easyQuestion, setEasyQuestion] = useState(0);
  const [mediumQuestion, setMediumQuestion] = useState(0);
  const [hardQuestion, setHardQuestion] = useState(0);
  const [totalSolved, setTotalSolved] = useState(0);
  const [streak, setStreak] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getUserData();
  }, []); // Empty dependency array to run only once on component mount

  // Add another useEffect to watch for changes in userName and call other functions accordingly
  useEffect(() => {
    // Make sure userName is not empty before calling other functions
    if (userName) {
      getName();
      getRank();
      getEasyQuestion();
      getMediumQuestion();
      getHardQuestion();
      getTotalSolved();
      getStreak();
    }
  }, [userName]);

  // function to get the userName of the user
  const getUserData = async () => {
    const data = await auth?.getSession();
    setUserName(data?.data?.session?.user?.user_metadata?.name);
    console.log("user name is :" + userName);
  };

  const getName = async () => {
    const options = {
      method: "GET",
      url: `https://leetcodeapi.p.rapidapi.com/${userName}/name`,
      headers: {
        "X-RapidAPI-Key": "8ea2f8c9d3msheed4df389aec10bp1d2453jsn1ccfe7bde100",
        "X-RapidAPI-Host": "leetcodeapi.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setName(response?.data);
      console.log(" the name of the user is:" + response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRank = async () => {
    const options = {
      method: "GET",
      url: `https://leetcodeapi.p.rapidapi.com/${userName}/rank`,
      headers: {
        "X-RapidAPI-Key": "8ea2f8c9d3msheed4df389aec10bp1d2453jsn1ccfe7bde100",
        "X-RapidAPI-Host": "leetcodeapi.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("the rank of the user is " + response?.data);
      setRank(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getEasyQuestion = async () => {
    const options = {
      method: "GET",
      url: `https://leetcodeapi.p.rapidapi.com/${userName}/easyQuestion`,
      headers: {
        "X-RapidAPI-Key": "8ea2f8c9d3msheed4df389aec10bp1d2453jsn1ccfe7bde100",
        "X-RapidAPI-Host": "leetcodeapi.p.rapidapi.com",
      },
    };

    try {
      const response = await axios?.request(options);
      console.log("the no of easy question is :" + response.data);
      setEasyQuestion(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMediumQuestion = async () => {
    const options = {
      method: "GET",
      url: `https://leetcodeapi.p.rapidapi.com/${userName}/mediumQuestion`,
      headers: {
        "X-RapidAPI-Key": "8ea2f8c9d3msheed4df389aec10bp1d2453jsn1ccfe7bde100",
        "X-RapidAPI-Host": "leetcodeapi.p.rapidapi.com",
      },
    };

    try {
      const response = await axios?.request(options);
      console.log("the no of medium question  solved:" + response.data);
      setMediumQuestion(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getHardQuestion = async () => {
    const options = {
      method: "GET",
      url: `https://leetcodeapi.p.rapidapi.com/${userName}/mediumQuestion`,
      headers: {
        "X-RapidAPI-Key": "8ea2f8c9d3msheed4df389aec10bp1d2453jsn1ccfe7bde100",
        "X-RapidAPI-Host": "leetcodeapi.p.rapidapi.com",
      },
    };

    try {
      const response = await axios?.request(options);
      console.log("the no of hard questin solved:" + response.data);
      setHardQuestion(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTotalSolved = async () => {
    const options = {
      method: "GET",
      url: `https://leetcodeapi.p.rapidapi.com/${userName}/totalSolved`,
      headers: {
        "X-RapidAPI-Key": "8ea2f8c9d3msheed4df389aec10bp1d2453jsn1ccfe7bde100",
        "X-RapidAPI-Host": "leetcodeapi.p.rapidapi.com",
      },
    };

    try {
      const response = await axios?.request(options);
      console.log("the total solved question " + response.data);
      setTotalSolved(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStreak = async () => {
    const options = {
      method: "GET",
      url: `https://leetcodeapi.p.rapidapi.com/${userName}/maxStreak`,
      headers: {
        "X-RapidAPI-Key": "8ea2f8c9d3msheed4df389aec10bp1d2453jsn1ccfe7bde100",
        "X-RapidAPI-Host": "leetcodeapi.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("streak:" + response.data);
      setStreak(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TopBar />
      <div className="body md:h-screen md:w-screen  bg-black  md:flex justify-center text-white gap-10 py-2">
        <div className=" container1 h-fit rounded-xl  bg-[#282828] md:px-5 md:py-2 md:my-4 py-8 my-10">
          <div className=" px-10 md:py-5">
            {/* all data about the user */}
            <div className="user flex">
              {/* image sectionof the user */}
              <div className="profile-picture  h-32 w-32" onClick={handleClick}>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Profile"
                    className="profile-image h-[110px] w-[100px]"
                  />
                ) : (
                  <img
                    src={avtar} // Replace with your default image path
                    alt="Default Profile"
                    className="default-profile-image rounded-lg"
                  />
                )}
              </div>

              <div className="data px-3">
                <h1 className="font-extrabold">
                  {name.length == 0 ? "coming soon" : name}
                </h1>
                <h1>codersunny812</h1>
                <h1>
                  Rank: <span className="font-extrabold">{rank}</span>
                </h1>
              </div>
            </div>

            <div className="locationInfo flex items-center py-4  capitalize">
              <FaLocationDot />
              <h1 className="px-2">india</h1>
            </div>

            <hr />
            {/* commmunity used */}
            <div className="communityStats  capitalize py-4">
              <h1 className="font-extrabold capitalize py-1 px-2">
                community Stats
              </h1>
              <div className="view flex items-center py-1 px-2 ">
                <FcBinoculars />
                <h1 className="px-2">view</h1>
              </div>

              <div className="solutions flex items-center py-1 px-2">
                <FcKey />
                <h1 className="px-2">solutions</h1>
              </div>

              <div className="discussion flex items-center py-1 px-2">
                <FcCollaboration />
                <h1 className="px-2">discussion</h1>
              </div>

              <div className="reputation flex items-center py-1 px-2">
                <FcLinux />
                <h1 className="px-2">reputation</h1>
              </div>
            </div>

            <hr />

            {/* language used */}
            <div className="languageUsed py-4">
              <h1 className="font-extrabold capitalize py-1 px-2">
                language used
              </h1>
              <div className="language-1  flex justify-between items-center my-1">
                <FaJava className="h-6 w-6" />
                <p>x problem solved</p>
              </div>
              <div className="language-2  flex justify-between items-center my-1">
                <IoLogoJavascript className="h-6 w-6" />
                <p>x problem solved</p>
              </div>
              <div className="language-3  flex justify-between items-center my-1">
                <SiMysql className="h-6 w-6" />
                <p>x problem solved</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container1 h-fit  rounded-xl  bg-[#282828] px-5 py-2 my-4">
          <div className="w-full md:px-14 md:py-3 ">
            <h1 className="pb-5 capitalize">solved problems</h1>
            <div className="bg-[#464646] rounded-md md:flex  md:px-7 py-1 md:py-3">
              <div className="px-10 md:h-[100px] md:w-[100px] h-[90px] w-[60px] rounded-full border-4 border-orange-500 flex justify-center items-center mx-auto">
                {totalSolved}/2713
              </div>
              <div className="solvedQuestion md:px-5 px-10 capitalize">
                <div className="easyQuestion px-5 py-2 flex">
                  <h1 className="px-5">easy</h1>
                  <h1 className="px-10">
                    {" "}
                    <span className="font-extrabold">{easyQuestion}</span>/762
                  </h1>
                </div>

                <div className="mediumQuestion px-4 py-2 flex">
                  <h1 className="px-5">medium</h1>
                  <h1 className="px-10">
                    {" "}
                    <span className="font-extrabold">{mediumQuestion}</span>
                    /1582
                  </h1>
                </div>

                <div className="easyQuestion px-5 py-2 flex">
                  <h1 className="px-5">hard</h1>
                  <h1 className="px-10">
                    {" "}
                    <span className="font-extrabold">{hardQuestion}</span>/665
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="moreInfo md:px-16 px-32 flex items-center">
            <PiFireFill color="orange" className="h-10 w-10" />
            <h1 className="px-3 text-xl">{streak}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
