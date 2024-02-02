export const BestTimeToSelStock = {
  id: "BestTimeToSelStock",
  title: "9. Best Time to Buy and Sell Stock",
  problemStatement: `<div  class="questionSummary mx-2 my-1 font-medium text-base">
              <h1  class="px-3 my-4 ">
                YYou are given an array  
                <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                 prices
                </span>  where  <span  class="border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1">
                prices[i]
                </span>. is the price of a given stock on the ith day.
              </h1>

              <h1  class="px-3 my-2 ">
                You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
              </h1>

              <h1  class="px-3 my-3">
             Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
              </h1>
            </div>`,
  examples: [
    {
      id: 1,
      input: "prices = [7,1,5,3,6,4]",
      output: "5",
      explanation:
        "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
    },
    {
      id: 2,
      input: "prices = [7,6,4,3,1]",
      output: "0",
      explanation:
        "In this case, no transactions are done and the max profit = 0.",
    },
  ],
  constraints: `<div  class="endSection mx-2 my-1">
              <h1  class="px-3 my-4 font-bold capitalize">constraints</h1>
              <ul  class="list-disc pl-6 w-fit">
                <li  class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  1 &lt;= nums.length &lt;= 105
                </li>
                 <li  class="my-2 border border-gray-600 bg-[#1b1b1b]  px-1  rounded-md text-gray-400 mx-1 ">
                  0 &lt;= prices[i] &lt;= 104
                </li>
                <li  class="px-2 my-2 capitalize">happy coding 💻</li>
              </ul>
            </div>`,
  
};
