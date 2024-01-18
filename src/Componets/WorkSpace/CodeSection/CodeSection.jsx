import Split from "react-split";
import WriteCode from "./WriteCodeSection/WriteCode";
import TestCase from "./TestCaseSection/TestCase";
import LanguageSelect from "./Lang/LanguageSelect";

const CodeSection = () => {
  return (
    <>
      <div className=" w-full  h-[100vh]  border-2 border-black  bg-black overflow-scroll">
        <div className=" text-white ">
          {/* prefrence section */}
          <div className=" relative z-1 pb-1">
            <LanguageSelect />
          </div>
          {/* code editor section */}
          <Split
            className="split2 "
            direction="vertical"
            minSize={0}
            gutterAlign="start"
            dragInterval={4}
          >
            <div className="">
              <WriteCode />
            </div>
            <div>
              <TestCase />
            </div>
          </Split>
        </div>
      </div>
    </>
  );
};

export default CodeSection;
