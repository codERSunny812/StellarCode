

const TestCase = () => {
  return (
    <div className='h-[calc(100vh-200px)] text-white bg-[#282828] mr-4 overflow-hidden'>

      <div className="top-heading flex  bg-[#3E3D3D] py-1 capitalize px-4 ">
        <h1 className="px-2 hover:bg-gray-500 py-1 hover:rounded-lg">testcases</h1>
        <h1 className="px-2 hover:bg-gray-500 py-1 rounded-lg">test result</h1>
      </div>

      {/* testcase written here */}
      <div className=" mx-4 my-1 px-4 py-1">
        <button className="mx-2 bg-[#3E3D3D] px-3 py-1 rounded-lg">case 1</button>

        <button className="mx-2 focus:bg-[#3E3D3D] hover:bg-[#3E3D3D] px-3 py-1 rounded-lg">case 2</button>

        <button className="mx-2 focus:bg-[#3E3D3D] hover:bg-[#3E3D3D] px-3 py-1 rounded-lg">case 3</button>
      </div>

      <div className=" my-1 mx-2 px-4 py-1">
       
          <h1 className="my-1 mx-2 capitalize">input:</h1>
          <p className="px-3 pb-1 pt-1 bg-[#3E3D3D] rounded-lg  font-bold w-full"> nums = [2,7,11,15], target = 9 </p>
       
       
    
        
          <h1 className="my-1 mx-2 capitalize">output:</h1>
          <p className="px-3 pb-1 pt-1 w-full bg-[#3E3D3D] rounded-lg  font-bold"> [0,1] </p>
        
      </div>

      {/* end section */}

      <div className="endsection flex justify-between px-4 font-semibold">

        <div className="">
          <button className="bg-[#3E3D3D] px-3 py-1 rounded-lg">console</button>
        </div>

        <div className=" mx-4 ">
          <button className="px-2 py-1 mx-2 bg-[#3E3D3D] rounded-lg capitalize">run</button>
          <button className=" px-2 py-1 bg-green-400 rounded-lg text-white capitalize">submit</button>
        </div>

      </div>
      


    </div>
  )
}

export default TestCase