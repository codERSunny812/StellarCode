export const FaltteningALl = {
  id: "FaltteningALl",
  title: "2.Flattening a Linked List",
  problemStatement: `<div  class="questionSummary mx-2 my-1 font-medium text-base">
              <h1  class="px-3 my-4 ">
                Given a Linked List of size  
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  N
                </span> 
               where every node represents a sub-linked-list and contains two pointers:
              </h1>

              <h1  class="px-3 my-2 ">
                a 
                <span  class="font-bold">next</span>, and you
               pointer to the next node.
              </h1>

               <h1  class="px-3 my-2 ">
            a 
                <span  class="font-bold">bottom</span>,pointer to a linked list where this node is head.
              </h1>

              <h1>
              Each of the sub-linked-list is in sorted order.
Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order.
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
    },
  ],
  constraints: `<div  class="endSection mx-2 my-1">
              <h1  class="px-3 my-4 font-bold capitalize">constraints</h1>
              <ul  class="list-disc pl-6 w-fit">
                <li  class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  0 &lt;= N &lt;= 50
                </li>
                <li  class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  1 &lt;= element of linked list &lt;= 103
                </li>
                <li  class="px-2 my-2 capitalize">happy coding 💻</li>
              </ul>
            </div>`,
  // function that check that the user has the correct code or not
  handlerFunction: ``,
  starterCode: "",
  order: 1,
  starterFunctionName: "function twoSum()",
};
