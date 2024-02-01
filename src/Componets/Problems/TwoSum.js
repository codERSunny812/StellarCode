
export const TwoSum = {
    id:'two-sum',
    title:'1.two sum',
    problemStatement:`<div class="questionSummary mx-2 my-1 font-medium text-base">
              <h1 class="px-3 my-4 ">
                Given an array of integers
                <span class="border border-gray-600 bg-[#1b1b1b]  px-1 py-[1px] text-center  rounded-md text-gray-400 mx-1">
                  nums
                </span>
                and integer
                <span class="border border-gray-600 bg-[#1b1b1b]  px-1 py-[1px] text-center  rounded-md text-gray-400">
                  target
                </span>
                , return indices of the two numbers such that they add up to
                <span class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-2 py-[1px]">
                  target
                </span>
                .
              </h1>

              <h1 class="px-3 my-2 ">
                You may assume that each input would have 
                <span class="font-bold">exactly one solution</span>, and you
                may not use thesame element twice.
              </h1>

              <h1 class="px-3 my-3">
                You can return the answer in any order.
              </h1>
            </div>`,
    examples: [
        {
            id: 1,
            inputText: "nums = [2,7,11,15], target = 9",
            outputText: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
            id: 2,
            inputText: "nums = [3,2,4], target = 6",
            outputText: "[1,2]",
            explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
        },
        {
            id: 3,
            inputText: " nums = [3,3], target = 6",
            outputText: "[0,1]",
        },
    ],
    constraints:`<div class="endSection mx-2 my-1">
              <h1 class="px-3 my-4 font-bold capitalize">constraints</h1>
              <ul class="list-disc pl-6 w-fit">
                <li class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  2 &lt;= nums.length &lt;= 104
                </li>
                <li class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  -109 &lt;= nums[i] &lt;= 109
                </li>
                <li class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  -109 &lt;= target &lt;= 109
                </li>
                <li class="px-2 my-2 capitalize">
                  Only one valid answer exists.
                </li>
                <li class="px-2 my-2 capitalize">happy coding 💻</li>
              </ul>
            </div>`,
    // function that check that the user has the correct code or not 
    handlerFunction:``,
    starterCode:"",
    order:1,
    starterFunctionName:"function twoSum()"
}