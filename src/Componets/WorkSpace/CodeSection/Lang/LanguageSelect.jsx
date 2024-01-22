import { Flex, Box, Tooltip } from "@chakra-ui/react";
import LangDropDown from "./LangDropDown";
import { IoSettings } from "react-icons/io5";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { useState } from "react";

const LanguageSelect = ({ handleSetFontSize }) => {
  
   const [fontDropDown,setFontDropDown] = useState(false);

  const handleSetting = ()=>{
    fontDropDown ? setFontDropDown(false) : setFontDropDown(true);
   }

  const handleChangeFontSize = (event) => {
    // console.log(typeof event)
    const selectedFontSize = parseInt(event.target.value, 10);
    // console.log(selectedFontSize)
    handleSetFontSize(selectedFontSize);
  };
  
  return (
    <>
      <Box textColor={"white"} paddingTop={1}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <LangDropDown />
          </Box>
          <Box>
            <Flex>
              <Tooltip label="settings">
                <Box as="span">
                  <IoSettings className="h-5 w-5 mx-2 cursor-pointer " onClick={handleSetting}/>
                 {fontDropDown && <div className="shadow-4xl h-fit w-fit absolute z-10 right-12 top-10  py-3 px-3 bg-white text-black rounded-xl">
                 
                   <h1 className="capitalize py-2 font-semibold">setting</h1>
                   <hr className="border-2 border-black" />
                    <div className=" py-5">
                      <label className="px-2 font-bold">Change your font : </label>

                      <select name="fontSize"
                        id="fontSize"
                        className="bg-black text-yellow-400 outline-none font-semibold py-1 px-1 rounded-lg shadow-4xl"
                        onChange={handleChangeFontSize}>
                        <option value="14">14px</option>
                        <option value="16">16px</option>
                        <option value="18">18px</option>
                        <option value="20">20px</option>
                        <option value="22">22px</option>
                      </select>
                    </div>
                  </div>}
                </Box>
              </Tooltip>

              <Tooltip label="full screen">
                <Box as="span">
                  <FaExpandArrowsAlt className="h-5 w-5 mx-2 cursor-pointer" />
                </Box>
              </Tooltip>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default LanguageSelect;
