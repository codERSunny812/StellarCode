import React, { useState } from 'react'

const ForgetPassowrd = () => {
    const [email,setEmail] = useState('');
  return (
    <>
          <div>
              <div className="h-screen w-full  bg-[#eceff1] flex justify-center items-center">
                  <div className="  flex flex-col gap-3 items-center bg-white w-[400px] h-[400px] rounded-lg">
                      <h1 className="font-mono text-lg capitalize my-2  font-bold w-[340px] h-[41px] flex items-center justify-start">password reset </h1>
                      <hr  className='border border-gray-400 w-full'/>

                      <h2 className=' border border-yellow-300  w-[270px] h-[116px] text-center bg-yellow-100 px-4 py-4 mx-2 my-2 rounded-sm flex justify-center items-center'>
                          forgotten your password? enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.

                      </h2>

                      <input
                          type="email"
                          name=""
                          id=""
                          placeholder="email"
                          className="my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 rounded-md hover:border-black outline-orange-300 outline-offset-2"
                          onChange={(e)=> setEmail(e.target.value)}
                          value={email}
                      />
                      {email.length != 0 ?? <p>required</p>} 
                     
                      <div className=" flex items-center w-[340px] h-[41px]">
                          <button className="capitalize py-1 px-2 rounded-md bg-green-500 text-white my-6">reset my password</button>
                       </div>
                                           
                  </div>
              </div>
          </div>
    </>
  )
}

export default ForgetPassowrd