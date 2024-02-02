export const BinarySearch = {
  id: "BinarySearch",
  title: "3.Binary Search",
  problemStatement: `<div  class="questionSummary mx-2 my-1 font-medium text-base">
              <h1  class="px-3 my-4 ">
                Given an array of integers 
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  nums
                </span> 
               which is sorted in ascending order, and an integer target, write a function to search <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  target
                </span>  in <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  nums
                </span> .If <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  target
                </span> exists, then return its index. Otherwise, return <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  -1
                </span>
              </h1>

              <h1  class="px-3 my-2 ">
              You must write an algorithm with <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  O(log n)
                </span> runtime complexity.
              </h1>

            </div>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [-1,0,3,5,9,12], target = 9",
      outputText: "4",
      explanation: "9 exists in nums and its index is 4",
    },
    {
      id: 2,
      inputText: "nums = [-1,0,3,5,9,12], target = 2",
      outputText: "-1",
      explanation: "2 does not exist in nums so return -1",
    },
  ],
  constraints: `<div  class="endSection mx-2 my-1">
              <h1  class="px-3 my-4 font-bold capitalize">constraints</h1>
              <ul  class="list-disc pl-6 w-fit">
                <li  class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  1 &lt;= nums.length &lt;= 104
                </li>
                <li  class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  -104 &lt;= nums[i] , target &lt;= 104
                </li>
                <li  class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                All the integers in nums are unique.
                </li>
                <li  class="px-2 my-2 capitalize">happy coding 💻</li>
              </ul>
            </div>`,
  
};
