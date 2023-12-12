import React from "react";
import Logo from "../../assets/LeetCode_logo.png";
import Lottie from "lottie-react";
import ipad from "./ipad.json";
import coding from './coding.json';
import codingScreen from './codingScreen.json'
import "../../index.css";
import './responsive.css';
import { FaWpexplorer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";



const Section1 = () => {
    return (
        <>
            <div className="flex p-12   justify-between">
                <Lottie animationData={ipad} className="h-96 " />
                <div className="text  flex flex-col  justify-center items-center capitalize">
                    <h1 className="text-white font-bold h-[44px] w-[520px] text-center text-4xl font-poppins">
                        a new way to learn{" "}
                    </h1>
                    <p className=" text-ellipsis overflow-hidden h-[56px] w-[520px] text-black text-center text-lg p-1 m-4 font-poppins">
                        leetcode is the best platform to help you enhance your skills,
                        expand your knowledge and prepare for technical interview.{" "}
                    </p>
                    <button className="bg-[#17807d] px-3 py-2 m-5 rounded-full capitalize text-white hover:bg-[#0d4c4b] ">
                        create account <span className="p-1"> {'>'} </span>{" "}
                    </button>
                </div>
            </div>
        </>
    );
};

const Section2 = () => {
    return (
        <>

            <div className="flex items-center justify-center">
                <div className="">
                    <div className="line1 flex justify-center items-center w-[520px] h-[96px]">
                        <h1 className="text-3xl capitalize p-4 font-medium">start exploring</h1>
                        <FaWpexplorer className="h-28 w-16" />
                    </div>


                    <p className="w-[530px] h-[74px] text-center">Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career</p>

                    <h4 className="w-[537px] h-[28px] capitalize text-end text-blue-500 font-bold">get started <span className="p-2">{'>'}</span></h4>

                </div>

                <div className="anim">
                    <Lottie animationData={coding} />
                </div>

            </div>

        </>
    );
}


const Section3 = () => {
    return (

        <>

            <div className="flex flex-col justify-center items-center">

                <div className=" mx-3 flex flex-col justify-center items-center p-4 m-2">
                    <MdDeveloperMode className="w-16 h-16" style={{ color: '#1da09c' }} />
                    <h2 className="  w-[945px] h-[33px] text-center capitalize font-extrabold text-[#1da09c] font-mono" >developer</h2>
                    <p className="w-[600px] h-[84px] font-mono p-2 m-2">We now support 14 popular coding languages. At our core, LeetCode is about developers. Our powerful development tools such as Playground help you test, debug and even write your own projects online.
                    </p>
                </div>

                <Lottie animationData={codingScreen} className="w-[900px] h-[300px]" />


            </div>


        </>
    )
}

const MainSection = () => {
    return (
        <>
            <div className=" cont w-full  bg-gradient-to-br from-gray-900 via-gray-600 to-blue-gray-900">
                <div className="navbar flex flex-col md:flex-row justify-between">
                    <div className="flex items-center capitalize md:ml-5">
                        <img src={Logo} alt="" className="h-12" />
                        <h2 className="text-white ml-2 md:ml-3 capitalize font-poppins">
                            leetcode
                        </h2>
                    </div>

                    <div className="navbar">
                        <ul className="flex flex-col md:flex-row p-3 mx-2 capitalize ">
                            <li className="px-2 text-yellow-300 hover:bg-yellow-400 hover:text-black p-1 rounded-2xl cursor-pointer">
                                premium
                            </li>
                            <li className="px-2 hover:bg-white p-1 rounded-2xl cursor-pointer text-black">
                                explore
                            </li>
                            <li className="px-2 hover:bg-white p-1 rounded-2xl cursor-pointer text-black">
                                product
                            </li>
                            <li className="px-2 hover:bg-white p-1 rounded-2xl cursor-pointer text-black">
                                developer
                            </li>
                            <li className="px-2 hover:bg-white p-1 rounded-2xl cursor-pointer text-black">
                                sign in
                            </li>
                        </ul>
                    </div>
                </div>

                <Section1 />
            </div>

            <Section2 />

            <Section3 />
        </>
    );
};

export default MainSection;
