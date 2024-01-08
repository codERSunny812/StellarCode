import React from "react";
import Split from "react-split";
import Problem from "./ProblemDescription/Problem";
import CodeSection from "./CodeSection/CodeSection";

const Question = () => {
  return (
    <Split
          className="split"
          gutterSize={13}
          gutterAlign="end"
          minSize={0}
    >
      <Problem />
      <CodeSection />
    </Split>
  );
};

export default Question;
