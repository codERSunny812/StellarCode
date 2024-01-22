export const ContainerWithMostWater={
    id: 'ContainerWithMostWater',
    title: '6. Container With Most Water',
    problemStatement: `<div  class="questionSummary mx-2 my-1 font-medium text-base">
              <h1  class="px-3 my-4 ">
                You are given an integer array  
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  height
                </span>  of lenght  <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                 n
                </span>. There are <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                  n
                </span>  vertical lines drawn such that the two endpoints of the <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                 ith
                </span> lines are <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                 (i, 0)
                </span> and  <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                 (i, height[i])
                </span>
                .
              </h1>

              <h1  class="px-3 my-2 ">
                Find two lines that together with the x-axis form a container, such that the container contains the most water.
              </h1>

              <h1  class="px-3 my-3">
              Return the maximum amount of water a container can store.
              </h1>
            </div>`,
    examples: [
        {
            id: 1,
            inputText: "height = [1,8,6,2,5,4,8,3,7]",
            outputText: "49",
            explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.",
        },
        {
            id: 2,
            inputText: "height = [1,1]",
            outputText: "1",
            // explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
        }
    ],
    constraints: `<div  class="endSection mx-2 my-1">
              <h1  class="px-3 my-4 font-bold capitalize">constraints</h1>
              <ul  class="list-disc pl-6 w-fit">
                <li  class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  2 &lt;= nums.length &lt;= 105
                </li>
                <li  class=" my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                n == height.length
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