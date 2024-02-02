export const Search2DMatrix = {
  id: "Search2DMatrix",
  title: "5.Search a 2D Matrix",
  problemStatement: `<div  class="questionSummary mx-2 my-1 font-medium text-base">
              <h1  class="px-3 my-4 ">
                You are given an 
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  m x n
                </span>  interger matrix <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  matrix
                </span>  with the following two properties:
              </h1>

              <ul  class="px-3 my-2 ">
              <li>
              Each row is sorted in non-decreasing order.
              </li>
              <li>
              The first integer of each row is greater than the last integer of the previous row.</li>
              </ul>

              <h1  class="px-3 my-4 ">
               Given an integer 
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  target
                </span>  , return <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  true
                </span>   if  <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  target
                </span> is in  <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  matrix
                </span> or  <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  false
                </span> otherwise.
              </h1>

              <h1>you must write the solution in  <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                 O(log(m * n))
                </span> time complexity</h1>
            </div>`,
  examples: [
    {
      id: 1,
      inputText: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
      outputText: "true",
      // explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      id: 2,
      inputText:
        "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
      outputText: "false",
      // explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
  ],
  constraints: `<div  class="endSection mx-2 my-1">
              <h1  class="px-3 my-4 font-bold capitalize">constraints</h1>
              <ul  class="list-disc pl-6 w-fit">
                <li  class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  10-4 &lt;= matrix[i][j], target &lt;= 104
                </li>
                <li  class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  1 &lt;= nums[i]  , n &lt;= 100
                </li>
                <li  class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                 m == matrix.length
                </li>
                <li  class="px-2 my-2 capitalize">
                  Only one valid answer exists.
                </li>
                <li  class="px-2 my-2 capitalize">happy coding 💻</li>
              </ul>
            </div>`,
  
};
