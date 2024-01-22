export const Subset={
    id: 'SubSet',
    title: '10.Subsets',
    problemStatement: `<div  class="questionSummary mx-2 my-1 font-medium text-base">
              <h1  class="px-3 my-4 ">
                Given an integer array  
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  nums
                </span> 
                of unique elements, return all possible
subsets
 (the power set).
                .
              </h1>

              <h1  class="px-3 my-2 ">
                You may assume that each input would have 
                <span  class="font-bold">exactly one solution</span>, and you
                may not use thesame element twice.
              </h1>

              <h1  class="px-3 my-3">
              The solution set must not contain duplicate subsets. Return the solution in any order.
              </h1>
            </div>`,
    examples: [
        {
            id: 1,
            inputText: "nums = [1,2,3]",
            outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
            // explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
            id: 2,
            inputText: "nums = [0]",
            outputText: "[[],[0]]",
            // explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
        }
    ],
    constraints: `<div  class="endSection mx-2 my-1">
              <h1  class="px-3 my-4 font-bold capitalize">constraints</h1>
              <ul  class="list-disc pl-6 w-fit">
                <li  class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  1 &lt;= nums.length &lt;= 10
                </li>
                <li  class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  -10 &lt;= nums[i] &lt;= 10
                </li>
                <li  class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                 All the numbers of nums are unique.
                </li>
                <li  class="px-2 my-2 capitalize">
                  Only one valid answer exists.
                </li>
                <li  class="px-2 my-2 capitalize">happy coding 💻</li>
              </ul>
            </div>`,
    // function that check that the user has the correct code or not 
    handlerFunction: ``,
    starterCode: "",
    order: 1,
    starterFunctionName: "function twoSum()"
}