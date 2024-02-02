import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { TwoSum } from "../../Problems/TwoSum";
import { ValidParenthesis } from "../../Problems/ValidParenthesis";
import { Subset } from "../../Problems/Subset";
import { Search2DMatrix } from "../../Problems/Search2DMatrix";
import { MergeInterval } from "../../Problems/MergeInterval";
import { MaxiDepthOfBT } from "../../Problems/MaxiDepthOfBT";
import { FaltteningALl } from "../../Problems/FlatteningaLL";
import { ContainerWithMostWater } from "../../Problems/ContainerWithMostWater";
import { BestTimeToSelStock } from "../../Problems/BestTimeToSelStock";
import { BinarySearch } from "../../Problems/BInarySearch";
import { useParams } from "react-router";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";

//all probelms routes
const problemsMapping = {
  "two-sum": { ...TwoSum, difficulty: "medium" },
  "flatted-linked-list": { ...FaltteningALl, difficulty: "medium" },
  "valid-parentheses": { ...ValidParenthesis, difficulty: "easy" },
  subsets: { ...Subset, difficulty: "medium" },
  "search-a-2d-matrix": { ...Search2DMatrix, difficulty: "medium" },
  "merge-intervals": { ...MergeInterval, difficulty: "medium" },
  "best-time-to-buy-and-sell-stock": {
    ...BestTimeToSelStock,
    difficulty: "easy",
  },
  "maximum-depth-of-binary-tree": { ...MaxiDepthOfBT, difficulty: "easy" },
  "container-with-most-water": {
    ...ContainerWithMostWater,
    difficulty: "medium",
  },
  "jump-game": { ...BinarySearch, difficulty: "hard" },
};

const Problem = () => {
  const { id } = useParams();
  // console.log(id);

  const selectedProblem = problemsMapping[id];
  // console.log(selectedProblem);

  // extract content from the selectedProblem
  const { title, problemStatement, examples, constraints, difficulty } =
    selectedProblem;

  // Function to sanitize and extract text content from HTML
  const sanitizeAndExtractText = (htmlContent) => {
    const sanitizedHTML = DOMPurify.sanitize(htmlContent);
    const textContent = ReactHtmlParser(sanitizedHTML);
    return textContent;
  };

  //color of the question logic
  const colorOfQuestion =
    difficulty === "easy"
      ? "green"
      : difficulty === "medium"
      ? "yellow"
      : difficulty === "hard"
      ? "red"
      : "black";

  return (
    <>
      <div className=" h-screen w-full  bg-black text-white ">
        <div className=" h-fit">
          <div className=" top">
            <h1 className="bg-[#282828] w-fit px-3 pt-1 mt-2 rounded-t-xl capitalize">
              description
            </h1>
          </div>

          {/* question part */}
          <div className=" h-screen overflow-y-scroll  bg-[#282828] pt-1">
            <div className="mx-2">
              <div className="font-bold capitalize text-lg">{title}</div>
            </div>

            <div className=" flex items-center justify-start px-2 py-1 mx-2 my-1">
              <h1
                className={`bg-[#3E3D3D] text-${colorOfQuestion}  font-bold capitalize px-2 py-[2px] rounded-full mx-2`}
              >
                {difficulty}
              </h1>
              <AiFillLike className="mx-2 h-5 w-5" />
              <AiFillDislike className="mx-2 h-5 w-5" />
              <FaRegStar className="mx-2 h-5 w-5" />
            </div>

            <div className="questionSummary mx-2 my-1 font-medium text-base">
              {sanitizeAndExtractText(problemStatement)}
            </div>

            {/* example section  */}
            <div className="examples  mx-2 my-1 capitalize">
              {/* example 1 */}
              {examples.map((examples) => (
                <>
                  <div key={examples.id}>
                    <h1 className="px-3 my-4 font-bold">
                      example {examples.id}
                    </h1>
                    <div className="px-3 py-2 bg-[#3E3D3D] rounded-lg mx-4 ">
                      <h1>
                        <span className="font-bold">input:</span>
                        <span className="text-slate-400">
                          {" "}
                          {examples.inputText}{" "}
                        </span>
                      </h1>
                      <h1>
                        <span className="font-bold">output:</span>
                        <span className="text-slate-400">
                          {examples.outputText}
                        </span>
                      </h1>

                      <h1>
                        <span className="font-bold">explanation:</span>
                        <span className="text-slate-400">
                          {" "}
                          {examples.explanation}
                        </span>
                      </h1>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className=" endSection mx-2 scroll-pb-7 ">
              {sanitizeAndExtractText(constraints)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
