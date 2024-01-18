import { Flex, Box, Tooltip } from "@chakra-ui/react";
import LangDropDown from "./LangDropDown";
import { IoSettings } from "react-icons/io5";
import { FaExpandArrowsAlt } from "react-icons/fa";

const LanguageSelect = () => {
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
                  <IoSettings className="h-5 w-5 mx-2 " />
                </Box>
              </Tooltip>

              <Tooltip label="full screen">
                <Box as="span">
                  <FaExpandArrowsAlt className="h-5 w-5 mx-2" />
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
