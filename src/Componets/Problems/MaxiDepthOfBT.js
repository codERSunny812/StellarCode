export const MaxiDepthOfBT = {
  id: "MaxiDepthOfBT",
  title: "8.Maximum Depth of Binary Tree",
  problemStatement: `<div  class="questionSummary mx-2 my-1 font-medium text-base">
              <h1  class="px-3 my-4 ">
                Given the   
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  root
                </span> 
                of a binary tree, return its maximum depth.
              </h1>

              <h1  class="px-3 my-2 ">
                A binary tree's 
                <span  class="font-bold">maximum depth</span>,is the number of nodes along the longest path from the root node down to the farthest leaf node.
              </h1>
            </div>`,
  examples: [
    {
      id: 1,
      inputText: "root = [3,9,20,null,null,15,7]",
      outputText: "3",
      // explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      id: 2,
      inputText: "root = [1,null,2]",
      outputText: "2",
      // explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
  ],
  constraints: `<div  class="endSection mx-2 my-1">
              <h1  class="px-3 my-4 font-bold capitalize">constraints</h1>
              <ul  class="list-disc pl-6 w-fit">
                <li  class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  -100 &lt;= node.length &lt;= 100
                </li>
                <li  class="px-2 my-2 capitalize">happy coding 💻</li>
              </ul>
            </div>`,
  
};
