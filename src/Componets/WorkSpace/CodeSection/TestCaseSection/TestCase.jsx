import { TwoSum } from "../../../Problems/TwoSum";
import { ValidParenthesis } from "../../../Problems/ValidParenthesis";
import { Subset } from "../../../Problems/Subset";
import { Search2DMatrix } from "../../../Problems/Search2DMatrix";
import { MergeInterval } from "../../../Problems/MergeInterval";
import { MaxiDepthOfBT } from "../../../Problems/MaxiDepthOfBT";
import { FaltteningALl } from "../../../Problems/FlatteningaLL";
import { ContainerWithMostWater } from "../../../Problems/ContainerWithMostWater";
import { BinarySearch } from "../../../Problems/BInarySearch";
import { BestTimeToSelStock } from "../../../Problems/BestTimeToSelStock";
import { useParams } from "react-router";
import { useState } from "react";

// all problems route
const problemsMapping = {
  "two-sum": { ...TwoSum },
  "flatted-linked-list": { ...FaltteningALl },
  "valid-parentheses": { ...ValidParenthesis },
  subsets: { ...Subset },
  "search-a-2d-matrix": { ...Search2DMatrix },
  "merge-intervals": { ...MergeInterval },
  "best-time-to-buy-and-sell-stock": { ...BestTimeToSelStock },
  "maximum-depth-of-binary-tree": { ...MaxiDepthOfBT },
  "container-with-most-water": { ...ContainerWithMostWater },
  "jump-game": { ...BinarySearch },
};

const TestCase = () => {
  const { id } = useParams();

  const selectedProblems = problemsMapping[id];

  // now extract content from the selectedProblems
  const { examples } = selectedProblems;

  // state for the selected case
  const [selectedCase, setSelectedCase] = useState(examples[0]);

  // function to handle case click
  const handleCaseClick = (example) => {
    setSelectedCase(example);
    console.log(selectedCase);
  };

  return (
    <div className="h-[calc(100vh-400px)] text-white bg-[#282828] mr-4 overflow-hidden">
      <div className="top-heading flex  bg-[#3E3D3D] py-1 capitalize px-4 ">
        <h1 className="px-2  py-1 bg-[#282828] rounded-lg">testcases {">"}</h1>
      </div>

      {/* testcase written here */}
      <div className=" mx-4 my-1 px-4 py-1">
        {examples.map((example) => (
          <button
            key={example.id}
            onClick={() => handleCaseClick(example)}
            className={`mx-2 focus:bg-[#3E3D3D] hover:bg-[#3E3D3D] px-3 py-1 rounded-lg ${
              selectedCase.id === example.id ? "bg-[#3E3D3D]" : ""
            }`}
          >
            Case {example.id}
          </button>
        ))}
      </div>

      <div className=" my-1 mx-2 px-4 py-1">
        <h1 className="my-2 mx-2 capitalize">input:</h1>
        <p className="px-3 py-2 bg-[#3E3D3D] rounded-lg  font-bold w-full">
          {" "}
          {selectedCase.inputText}{" "}
        </p>

        <h1 className="my-2 mx-2 capitalize">output:</h1>
        <p className="px-3 py-2 w-full bg-[#3E3D3D] rounded-lg  font-bold">
          {" "}
          {selectedCase.outputText}
        </p>
      </div>

      {/* end section */}

      <div className="endsection mt-6 flex justify-between px-4 font-semibold">
        <div className="">
          <button className="bg-[#3E3D3D] px-3 py-1 rounded-lg">console</button>
        </div>

        <div className="mx-4">
          <button className="px-2 py-1 mx-2 bg-[#3E3D3D] rounded-lg capitalize">
            run
          </button>
          <button className=" px-2 py-1 bg-green-400 rounded-lg text-white capitalize">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCase;
