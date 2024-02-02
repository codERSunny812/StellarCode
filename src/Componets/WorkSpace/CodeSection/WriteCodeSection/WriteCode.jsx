/* eslint-disable no-unused-vars */
import { Box } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { useContext } from "react";
import { LangContext } from "../../../../Context/LangContext";
import { useParams } from "react-router";

const WriteCode = ({ fontSize, fullScreen }) => {
  const { lang } = useContext(LangContext);
  const { id } = useParams();

  console.log(fullScreen);

  let javascriptCode, javaCode, CppCode, PythonCode;

  // switch case for the sudo code
  switch (id) {
    case "two-sum":
      (javascriptCode = `var twoSum = function(nums, target) {
    
};`),
        (javaCode = `class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}`),
        (CppCode = `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};`),
        (PythonCode = `class Solution(object):
    def twoSum(self, nums, target):`);
      break;

    case "flatted-linked-list":
      (javascriptCode = `class Solution {
    
    flatten(head)
    {
        //your code here
    }
    
}`),
        (javaCode = `class GfG
{
    Node flatten(Node root)
    {
	// Your code here
    }
}`),
        (CppCode = `Node *flatten(Node *root)
{
   // Your code here
}`),
        (PythonCode = `def flatten(root):`);

      break;

    case "valid-parentheses":
      (javascriptCode = `var isValid = function(s) {
    
};`),
        (javaCode = `class Solution {
    public boolean isValid(String s) {
        
    }
}`),
        (CppCode = `class Solution {
    public boolean isValid(String s) {
        
    }
}`),
        (PythonCode = `class Solution(object):
    def isValid(self, s):`);

      break;

    case "subsets":
      (javascriptCode = `var subsets = function(nums) {
    
};`),
        (javaCode = `class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        
    }
}`),
        (CppCode = `class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        
    }
};`),
        (PythonCode = `class Solution(object):
    def subsets(self, nums):`);

      break;

    case "search-a-2d-matrix":
      (javascriptCode = `var searchMatrix = function(matrix, target) {
    
};`),
        (javaCode = `class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        
    }
}`),
        (CppCode = `class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
    }
};`),
        (PythonCode = `class Solution(object):
    def searchMatrix(self, matrix, target):`);

      break;

    case "merge-intervals":
      (javascriptCode = `var merge = function(intervals) {
    
};`),
        (javaCode = `class Solution {
    public int[][] merge(int[][] intervals) {
        
    }
}`),
        (CppCode = `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        
    }
};`),
        (PythonCode = `class Solution(object):
    def merge(self, intervals):`);

      break;

    case "best-time-to-buy-and-sell-stock":
      (javascriptCode = `var maxProfit = function(prices) {
    
};`),
        (javaCode = `class Solution {
    public int maxProfit(int[] prices) {
        
    }
}`),
        (CppCode = `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
    }
};`),
        (PythonCode = `class Solution(object):
    def maxProfit(self, prices):`);

      break;

    case "maximum-depth-of-binary-tree":
      (javascriptCode = `var maxDepth = function(root) {
    
};`),
        (javaCode = `class Solution {
    public int maxDepth(TreeNode root) {
        
    }
}`),
        (CppCode = `class Solution {
public:
    int maxDepth(TreeNode* root) {
        
    }
};`),
        (PythonCode = `class Solution(object):
    def maxDepth(self, root):`);

      break;

    case "container-with-most-water":
      (javascriptCode = `var maxArea = function(height) {
    
};`),
        (javaCode = `class Solution {
    public int maxArea(int[] height) {
        
    }
}`),
        (CppCode = `class Solution {
public:
    int maxArea(vector<int>& height) {
        
    }
};`),
        (PythonCode = `class Solution(object):
    def maxArea(self, height):`);

      break;

    case "jump-game":
      (javascriptCode = `var search = function(nums, target) {
    
};`),
        (javaCode = `class Solution {
    public int search(int[] nums, int target) {
        
    }
}`),
        (CppCode = `class Solution {
public:
    int search(vector<int>& nums, int target) {
        
    }
};`),
        (PythonCode = `class Solution(object):
    def search(self, nums, target):`);

      break;

    default:
      javascriptCode = "/* Default code or error handling */";
  }

  try {
    let codeMirrorProps = {
      value: "",
      height: fullScreen == "400px" ? "100vh" : "400px",
      theme: vscodeDark,
      extensions: [],
      onChange: (value, viewUpdate) => {
        console.log("value:", value);
      },
    };

    // switch case for the code editor
    switch (lang) {
      case "javascript":
        codeMirrorProps = {
          ...codeMirrorProps,
          value: javascriptCode,
          extensions: [javascript({ jsx: true })],
        };
        // alert("javascript selected");
        break;
      case "java":
        codeMirrorProps = {
          ...codeMirrorProps,
          value: javaCode,
          extensions: [java({ java: true })],
        };
        // alert("java selected");
        break;
      case "cpp":
        codeMirrorProps = {
          ...codeMirrorProps,
          value: CppCode,
          extensions: [cpp({ cpp: true })],
        };
        break;
      case "python":
        codeMirrorProps = {
          ...codeMirrorProps,
          value: PythonCode,
          extensions: [python({ python: true })],
        };
        break;
      default:
        codeMirrorProps.value = "Please select any one language first.";
    }
    // Set the default height
    let height = "400px";

    // Update the height if fullScreen is true
    if (fullScreen) {
      height = "100vh"; // Set to fullscreen height
    }

    return (
      <Box>
        <Box>
          <CodeMirror
            {...codeMirrorProps}
            style={{ fontSize: `${fontSize}px`, border: "2px solid red" }}
          />
        </Box>
      </Box>
    );
  } catch (error) {
    console.error("An error occurred while rendering CodeMirror:", error);
    return <p>An error occurred. Please try again.</p>;
  }
};

export default WriteCode;
