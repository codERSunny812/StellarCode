import {useState} from "react";
import Logo from "../../assets/LeetCode_logo.png";
import { FaGithub } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import './responsive.css';
import {auth} from '../../supabase'

const Signup = ({ handleStatus }) => {
  // state variables 
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  // console.log(props);
// console.log(handleStatus);

  const AuthStateHandle = () =>{

    
    console.log("sign up  button is clicked ");
    
    newUserSignUp();

    const handleAuthStats = () => {
      handleStatus();
    }

    handleAuthStats();
    
  }

  // new user sign up 
  const newUserSignUp = async () => {

    try {
      const {data,error} = await auth.signUp({
        email:email,
        password:password
      })
    } 
    catch (error) {
      console.error('Error:', error.message);
    }

  }

 
  return (
    <>
      <div className="h-fit w-full  bg-[#eceff1] flex justify-center">
        <div className=" signUpCont  flex flex-col gap-3 items-center bg-white w-[400px] h-full">
          <Link to='/'>
            <img src={Logo} alt="leetcode logo" className="h-20 my-6" />
          </Link>
          
          <h1 className="font-mono text-lg capitalize">leetcode</h1>

          <input
            type="text"
            placeholder="username"
            className="my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 hover:border-black  rounded-md outline-orange-300 outline-offset-2"
            id="username"
          />
          <input
            type="email"
            placeholder="email"
            className="my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 rounded-md hover:border-black outline-orange-300 outline-offset-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            
          />
          <input
            type="password"
            placeholder="password"
            className=" my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 rounded-md hover:border-black  outline-orange-300 outline-offset-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"

          />
          <input
            type="password"
            placeholder="confirm password"
            className="my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 rounded-md hover:border-black outline-orange-300 outline-offset-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="confirmPassword"
          />
          
          <button className="capitalize  w-[340px] h-[42px] bg-gradient-to-r from-gray-600 via-slate-500 to-gray-400 text-white my-2 py-2 rounded-sm" onClick={AuthStateHandle}>
            sign up
          </button>

          <h3 className=" text-gray-400 my-2 ">
            Have an account?{" "}
            <Link to='/login'>
            <span className="text-blue-500 capitalize">sign in</span>
            </Link>
          </h3>

          <h4 className="text-gray-400 my-2">our you can sign in with </h4>
          <div className="flex gap-5 ">
            <FaGithub className="h-7 w-7 icon-1 text-gray-600 hover:text-black my-2" />
            <FaGooglePlus className="h-7 w-7 text-gray-600 hover:text-red-500 my-2" />
            <FaTwitter className="h-7 w-7 text-gray-600 hover:text-blue-400 my-2" />
          </div>

          <h3 className="capitalize  text-gray-400 flex-wrap text-center text-sm ">
            This site is protected by re{" "}
            <span className="uppercase">captcha</span> and the google privacy
            policy and term of service apply
          </h3>
        </div>
      </div>
    </>
  );
};

export default Signup;
