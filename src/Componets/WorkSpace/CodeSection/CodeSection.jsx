import Split from "react-split";
import WriteCode from "./WriteCodeSection/WriteCode";
import TestCase from "./TestCaseSection/TestCase";
import LanguageSelect from "./Lang/LanguageSelect";
import { useState } from "react";

const CodeSection = () => {
  const [fontSize, setFontSize] = useState(14);
  console.log(fontSize);
  const [fullScreen, setFullScreen] = useState(400);

  const handleFullScreen = (fullScreen) => {
    fullScreen == 400 ? setFullScreen(100) : setFullScreen(400);
  };

  const handleSetFontSize = (font) => {
    setFontSize(font);
  };

  return (
    <>
      <div className="h-screen overflow-y-scroll w-full  bg-black">
        <div className=" text-white ">
          {/* prefrence section */}
          <div className=" relative z-1 pb-1">
            <LanguageSelect
              handleSetFontSize={handleSetFontSize}
              handleFullScreen={handleFullScreen}
            />
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
              <WriteCode fontSize={fontSize} fullScreen={fullScreen} />
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
