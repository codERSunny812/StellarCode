import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";

const Problem = () => {
    return (
        <>
            <div className="h-screen  bg-black text-white">
                <div className="w-full  ">
                    <div className="top mt-2">
                        <h1 className="bg-[#282828] w-fit px-3 pt-1 rounded-t-xl capitalize">
                            description
                        </h1>
                    </div>
                    {/* question part */}
                    <div className="bottom h-screen overflow-y-auto overflow-scroll  bg-[#282828] pt-3  ">
                        <div className="mx-2">
                            <div className="font-bold capitalize text-lg">1.two sum</div>
                        </div>

                        <div className=" flex items-center justify-start px-2 py-1 mx-2 my-1">
                            <h1 className="bg-green-200 text-green-500 font-bold capitalize px-2 py-[2px] rounded-full mx-2">easy</h1>
                            <AiFillLike className="mx-2 h-5 w-5" />
                            <AiFillDislike className="mx-2 h-5 w-5" />
                            <FaRegStar className="mx-2 h-5 w-5" />
                        </div>

                        <div className="questionSummary mx-2 my-1 font-medium text-base">
                            <h1 className="px-3 my-4 " >
                                Given an array of integers <span className="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">nums</span> and integer <span className="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400">target</span>,
                                return indices of the two numbers such that they add up to
                                <span className="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-2"> target.</span>.
                            </h1>

                            <h1 className="px-3 my-2 ">
                                You may assume that each input would have <span className="font-bold">exactly one solution</span>,
                                and you may not use thesame element twice.
                            </h1>

                            <h1 className="px-3 my-3">
                                You can return the answer in any order.
                            </h1>
                        </div>

                        {/* example section  */}
                        <div className="examples  mx-2 my-1 capitalize">
                            {/* example 1 */}
                            <h1 className="px-3 my-4 font-bold">example 1</h1>
                            <div className="px-3 py-2 bg-[#3E3D3D] rounded-lg mx-4 ">
                                <h1>
                                    <span className="font-bold">input:</span>
                                    <span className="text-slate-400"> nums = [2,7,11,15], target = 9 </span>
                                </h1>
                                <h1>
                                    <span className="font-bold">output:</span>
                                    <span className="text-slate-400"> [0,1]</span>
                                </h1>

                                <h1>
                                    <span className="font-bold">explanation:</span>
                                    <span className="text-slate-400"> Because nums[0] + nums[1] == 9, we return [0, 1].</span>
                                </h1>
                            </div>

                            {/* example 2  */}
                            <h1 className="px-3 my-4 font-bold">example 2</h1>
                            <div className="px-3 py-2 bg-[#3E3D3D] rounded-lg mx-4 ">
                                <h1>
                                    <span className="font-bold">input:</span>
                                    <span className="text-slate-400"> nums = [2,7,11,15], target = 9 </span>
                                </h1>
                                <h1>
                                    <span className="font-bold">output:</span>
                                    <span className="text-slate-400"> [0,1]</span>
                                </h1>

                                <h1>
                                    <span className="font-bold">explanation:</span>
                                    <span className="text-slate-400"> Because nums[0] + nums[1] == 9, we return [0, 1].</span>
                                </h1>
                            </div>

                            {/* example 3 */}
                            <h1 className="px-3 my-4 font-bold">example 3</h1>
                            <div className="px-3 py-2 bg-[#3E3D3D] rounded-lg mx-4 ">
                                <h1>
                                    <span className="font-bold">input:</span>
                                    <span className="text-slate-400"> nums = [2,7,11,15], target = 9 </span>
                                </h1>
                                <h1>
                                    <span className="font-bold">output:</span>
                                    <span className="text-slate-400"> [0,1]</span>
                                </h1>

                                <h1>
                                    <span className="font-bold">explanation:</span>
                                    <span className="text-slate-400"> Because nums[0] + nums[1] == 9, we return [0, 1].</span>
                                </h1>
                            </div>

                        </div>

                        <div className="endSection mx-2 my-1">
                            <h1 className="px-3 my-4 font-bold capitalize">constraints</h1>
                            <ul className="list-disc pl-6 w-fit">
                                <li className="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">2 &lt;= nums.length &lt;= 104</li>
                                <li className=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">-109 &lt;= nums[i] &lt;= 109</li>
                                <li className=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">-109 &lt;= target &lt;= 109</li>
                                <li className="px-2 my-2 capitalize">Only one valid answer exists.</li>
                                <li className="px-2 my-2 capitalize">happy coding 💻</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Problem;
