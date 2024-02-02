import Lottie from "lottie-react";
import VerifyEmailAnimation from "./EmailVerify.json";
import { useContext } from "react";
import { LangContext } from "../Context/LangContext";

const VerifyInfo = () => {
  const { mail } = useContext(LangContext);
  console.log(mail);
  return (
    <>
      <div className="w-full ">
        <div className="flex flex-col">
          <div className="mt-24 ">
            <Lottie animationData={VerifyEmailAnimation} className="h-48" />
          </div>

          <div className="text w-[550px] m-auto">
            <h1 className="text-3xl font-bold text-center capitalize">
              verify your email
            </h1>
            <p className="text-wrap mx-2 px-12 pt-5 font-poppins">{`we have sent a email to ${mail} to verify your email address and activate your account.The link will be expire in 24 hour`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyInfo;
