import { useState, useEffect } from "react";
import { auth } from "../../supabase";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    try {
      // Step 1: Send the user an email to get a password reset token.
      const { data, error } = await auth.resetPasswordForEmail(email);
      

      if (error) {
        
        console.error("Error sending password reset email:", error.message);
        // Handle the error, show a message to the user, etc.
        return;
      }

      // Step 2: Once the user is redirected back to your application,
      // ask the user to reset their password.
      // This part should be handled separately, maybe on a different route.
      // For now, let's just log a message.
      console.log(data);
      console.log("Password reset email sent successfully!");
    } catch (error) {
      console.error("Error handling password reset:", error.message);
      // Handle the error, show a message to the user, etc.
    }
  };

  return (
    <>
      <div>
        <div className="h-screen w-full bg-[#eceff1] flex justify-center items-center">
          <div className="flex flex-col gap-3 items-center bg-white w-[400px] h-[400px] rounded-lg">
            <h1 className="font-mono text-lg capitalize my-2 font-bold w-[340px] h-[41px] flex items-center justify-start">
              Password Reset
            </h1>
            <hr className="border border-gray-400 w-full" />

            <h2 className="border border-yellow-300 w-[270px] h-[116px] text-center bg-yellow-100 px-4 py-4 mx-2 my-2 rounded-lg flex justify-center items-center">
              Forgotten your password? Enter your e-mail address below, and
              we'll send you an e-mail allowing you to reset it.
            </h2>

            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="my-2 p-2 w-[340px] h-[41px] border border-slate-200 rounded-md hover:border-black outline-orange-300 outline-offset-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {/* You might want to conditionally render the "required" message based on the email.length */}
            {email.length !== 0 && <p>Required</p>}

            <div className="flex items-center w-[340px] h-[41px]">
              <button
                className="capitalize py-1 px-2 rounded-md bg-green-500 text-white my-6"
                onClick={handleResetPassword}
              >
                Reset My Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
