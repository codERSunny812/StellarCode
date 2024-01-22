import Split from "react-split";
import WriteCode from "./WriteCodeSection/WriteCode";
import TestCase from "./TestCaseSection/TestCase";
import LanguageSelect from "./Lang/LanguageSelect";
import { useState } from "react";

const CodeSection = () => {
  const [fontSize, setFontSize] = useState(14);
  console.log(fontSize);

  const handleSetFontSize = (font) =>{
    setFontSize(font);
  }


  return (
    <>
      <div className=" w-full  h-[100vh]  border-2 border-black  bg-black overflow-scroll">
        <div className=" text-white ">
          {/* prefrence section */}
          <div className=" relative z-1 pb-1">
            <LanguageSelect  handleSetFontSize={handleSetFontSize}  />
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
              <WriteCode fontSize={fontSize} />
            </div>
            <div>
              <TestCase  />
            </div>
          </Split>
        </div>
      </div>
    </>
  );
};

export default CodeSection;
