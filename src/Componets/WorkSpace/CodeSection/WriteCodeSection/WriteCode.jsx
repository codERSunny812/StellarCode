/* eslint-disable no-unused-vars */
import { Box } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { useContext} from "react";
import { LangContext } from "../../../../Context/LangContext";

const WriteCode = () => {
  const { lang } = useContext(LangContext);
  console.log("WriteCode - lang:", lang);
  
  try {
    let codeMirrorProps = {
      value: "",
      height: "300px",
      theme: vscodeDark,
      extensions: [],
      onChange: (value, viewUpdate) => {
        console.log("value:", value);
      },
    };

    switch (lang) {
      case "javascript":
        codeMirrorProps = {
          ...codeMirrorProps,
          value: "var twoSum = function(nums, target) {\n\n};",
          extensions: [javascript({ jsx: true })],
        
        };
        // alert("javascript selected");
        break;
      case "java":
        codeMirrorProps = {
          ...codeMirrorProps,
          value: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n\n    }\n}",
          extensions: [java({ java: true })],
        };
        // alert("java selected");
        break;
      case "cpp":
        codeMirrorProps = {
          ...codeMirrorProps,
          value: "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n\n    }\n};",
          extensions: [cpp({ cpp: true })],
        };
        break;
      case "python":
        codeMirrorProps = {
          ...codeMirrorProps,
          value: "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        ",
          extensions: [python({ python: true })],
        };
        break;
      default:
        codeMirrorProps.value = "Please select any one language first.";
    }

    return (
      <Box
      
      
      >
        <Box  border={"2px solid gray"} >
          <CodeMirror {...codeMirrorProps}   />
        </Box>
      </Box>
    );
  } catch (error) {
    console.error("An error occurred while rendering CodeMirror:", error);
    return <p>An error occurred. Please try again.</p>;
  }
};

export default WriteCode;
