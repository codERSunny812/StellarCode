

export const ValidParenthesis = {
  id: "ValidParenthesis",
  title: "4.valid parenthesis",
  problemStatement: `<div  class="questionSummary mx-2 my-1 font-medium text-base">
              <h1  class="px-3 my-4 ">
                Given a string  
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                s
                </span> 
               containing just the characters 
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400">
                  (
                </span> , 
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400">
                  )
                </span> , 
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400">
                  {
                </span>,
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400">
                  }
                </span>,
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400">
                  [
                </span>
                and <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400">
                  ]
                </span>
                 determine if the input string is valid.
              </h1>

              <h1  class="px-3 my-2 ">
                An input string is valid if:

                <p>1.Open brackets must be closed by the same type of brackets.</p>

                 <p>2.Open brackets must be closed in the correct order.</p>

                  <p>3.Every close bracket has a corresponding open bracket of the same type.</p>      
              </h1>

            </div>`,
  examples: [
    {
      id: 1,
      inputText: 's = "()" ',
      outputText: "true",
      // explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      id: 2,
      inputText: 's = "()[]{}" ',
      outputText: "true",
      // explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      id: 3,
      inputText: 's = "(]" ',
      outputText: "false",
    },
  ],
  constraints: `<div  class="endSection mx-2 my-1">
              <h1  class="px-3 my-4 font-bold capitalize">constraints</h1>
              <ul  class="list-disc pl-6 w-fit">
                <li  class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  1 &lt;= nums.length &lt;= 104
                </li>
                <li  class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  -109 &lt;= nums[i] &lt;= 109
                </li>
                <li  class="px-2 my-2 capitalize">happy coding 💻</li>
              </ul>
            </div>`,
 
};
