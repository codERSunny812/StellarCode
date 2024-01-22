import Logo from "../../assets/LeetCode_logo.png";
import Lottie from "lottie-react";
import ipad from "./ipad.json";
import coding from "./coding.json";
import "../../index.css";
import "./responsive.css";
import { FaWpexplorer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const Section1 = () => {
  return (
    <>
      <div className=" mb-3 section1 flex p-16   justify-between">
        <Lottie animationData={ipad} className="h-96 section1_animation" />
        <div className="section1_content text  flex flex-col  justify-center items-center capitalize">
          <h1 className="text-white font-bold h-[44px] w-[520px] text-center text-4xl font-poppins">
            a new way to learn{" "}
          </h1>
          <p className=" section1_para text-ellipsis overflow-hidden h-[56px] w-[520px] text-black text-center text-lg p-1 m-4 font-poppins">
            leetcode is the best platform to help you enhance your skills,
            expand your knowledge and prepare for technical interview.{" "}
          </p>
          <Link to="/status">
            <button className="bg-[#17807d] px-3 py-2 m-5 mb-11 rounded-full capitalize text-white hover:bg-[#0d4c4b] cursor-pointer ">
              create account <span className="p-1"> {">"} </span>{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

const Section2 = () => {
  return (
    <>
      <div className="section2 h-screen flex items-center justify-center bg-gray-200 ">
        {/* section 2 text */}
        <div className="section2_contents">
          {/* heading */}
          <div className="section2_text_content flex justify-center items-center w-[520px] h-[96px]">
            <h1 className="text-3xl capitalize p-4 font-medium">
              start exploring
            </h1>
            <FaWpexplorer className=" section2_icon h-28 w-16" />
          </div>
          {/* para */}
          <div className="section2_para_content">
            <p className="section2_text_para w-[530px] h-[74px] text-center ">
              Explore is a well-organized tool that helps you get the most out
              of LeetCode by providing structure to guide your progress towards
              the next step in your programming career.
            </p>

            <h4 className="w-[537px] h-[28px] capitalize text-end text-blue-500 font-bold section2_text_h4">
              get started{" "}
            </h4>
          </div>
        </div>
        {/* section 2 animation */}
        <div className="anim">
          <Lottie animationData={coding} className="h-auto w-80" />
        </div>
      </div>
    </>
  );
};

const Section3 = () => {
  const myInitialCode = `public class Main {
  public static void main(String[] args) {
    if (20 > 18) {
      System.out.println("20 is greater than 18"); // obviously
    }
  }
}`;

  const texts = [
    `
fn factorial(n: u64) -> u64 {
    if n == 0 {
        1
    } else {
        n * factorial(n - 1)
    }
}

fn main() {
    // Calculate and print the factorial of 5
    let result = factorial(5);
    println!("Factorial of 5 is: {}", result);
}
`,
    `package main

import (
	"fmt"
	"strconv"
)

func main() {

	fmt.Print("Enter a number: ")


	var input string
	fmt.Scanln(&input)

	
	num, err := strconv.Atoi(input)
	if err != nil {
		fmt.Println("Invalid input. Please enter a valid number.")
		return
	}
	square := num * num
	cube := num * num * num

	fmt.Printf("Square of %d is: %d\n", num, square)
	fmt.Printf("Cube of %d is: %d\n", num, cube)
}
`,
    `
user_input = input("Enter a number: ")

try:
    
    num = int(user_input)

    
    square = num ** 2
    cube = num ** 3

    print(f"Square of {num} is: {square}")
    print(f"Cube of {num} is: {cube}")

except ValueError:
    
    print("Invalid input. Please enter a valid number.")
`,
  ];

  const [code, setCode] = useState(myInitialCode);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCode(texts[textIndex]);
    }, 6000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [textIndex, texts]);

  return (
    <>
      <div className=" section3 flex flex-col justify-center items-center bg-gray-200">
        <div className=" section3_text_content mx-3 flex flex-col justify-center items-center p-4 m-2">
          <MdDeveloperMode className="w-16 h-16" style={{ color: "#1da09c" }} />
          <h2 className="  w-[945px] h-[33px] text-center capitalize font-extrabold text-[#1da09c] font-mono">
            developer
          </h2>
          <p className="w-[600px] h-[84px] font-mono p-2 m-2">
            We now support 14 popular coding languages. At our core, LeetCode is
            about developers. Our powerful development tools such as Playground
            help you test, debug and even write your own projects online.
          </p>
        </div>

        <div className=" mb-6 mt-4">
          <CodeMirror
            theme={vscodeDark}
            value={code}
            height="300px"
            width="600px"
          />
        </div>
      </div>
    </>
  );
};

const MainSection = () => {
  return (
    <>
      <div className="cont w-full  bg-gradient-to-br from-gray-900 via-gray-600 to-blue-gray-900 ">
        <div className=" navbar flex flex-col md:flex-row justify-between">
          <div className="flex items-center capitalize">
            <Link to="/">
              <img src={Logo} alt="" className="h-12 logo" />
            </Link>
            <h2 className="text-white ml-2 md:ml-3 capitalize font-poppins logo_name">
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
              <Link to="/login">
                <li className="px-2 hover:bg-white p-1 rounded-2xl cursor-pointer text-black">
                  sign in
                </li>
              </Link>
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
