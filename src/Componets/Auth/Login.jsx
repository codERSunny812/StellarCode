import Logo from "../../assets/LeetCode_logo.png";
import { FaGithub } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../supabase";

const Login = () => {
  // sign in of the user logic

  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const HomeNavigation = useNavigate();
  

  // login logic of the user
  const userLogIn = async() =>{
    try {
      const { data, error } = await auth.signInWithPassword({
        email: userEmail,
        password: userPassword
      })

      if(!error){
        console.log( data + "user is successfully login ");
      }else{
        console.log(error);
      }


    } catch (error) {
      console.log(error);
    }
    HomeNavigation('/home')

     
  }
  //  login using github
  const signInWithGithub = async()=>{
    try {
      //login using github
      const { data, error } = auth.signInWithOAuth({
        provider: 'github',
      });

      if (!error) {
        console.log("successfully login using github");
      } else {
        console.log("error in the signing up of the function")
      }
      HomeNavigation('/home')


    } catch (error) {
      // error handle 
      console.log(error)
    }
  }


  return (
    <div>
      <div className="h-screen w-full  bg-[#eceff1] flex justify-center items-center">
        <div className="  flex flex-col gap-3 items-center bg-white w-[400px] h-fit">
          <Link to="/">
            <img src={Logo} alt="leetcode logo" className="h-20 my-6" />
          </Link>
          <h1 className="font-mono text-lg capitalize">leetcode</h1>

          <input
            type="email"
            placeholder="email"
            className="my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 rounded-md hover:border-black outline-orange-300 outline-offset-2"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            className=" my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 rounded-md hover:border-black  outline-orange-300 outline-offset-2"
            value={userPassword}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="capitalize  w-[340px] h-[41px] bg-gradient-to-r from-gray-600 via-slate-500 to-gray-400 text-white my-2"
            onClick={userLogIn}
          >
            sign in
          </button>

          <div className="capitalize  w-[340px] h-[41px] flex justify-between">
            <Link to="/forgotpassword">
              <h3 className=" text-blue-400 my-2 ">forget password</h3>
            </Link>
            <Link to="/signup">
              <h3 className=" text-blue-400 my-2 ">sign up</h3>
            </Link>
          </div>

          <h4 className="text-gray-400 my-2">our you can signin in with </h4>
          <div className="flex gap-5 ">
            <FaGithub className="h-7 w-7 icon-1 text-gray-600 hover:text-black my-2" onClick={signInWithGithub} />
            <FaGooglePlus className="h-7 w-7 text-gray-600 hover:text-red-500 my-2" />
            <FaTwitter className="h-7 w-7 text-gray-600 hover:text-blue-400 my-2" />
          </div>

          <h3 className="capitalize  text-gray-400 flex-wrap text-center text-sm  my-4">
            This site is protected by re{" "}
            <span className="uppercase">captcha</span> and the google{" "}
            <span className="underline">privacy policy</span> and{" "}
            <span className="underline">term of service</span> apply
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
