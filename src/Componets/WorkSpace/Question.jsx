import Split from "react-split";
import Problem from "./ProblemDescription/Problem";
import CodeSection from "./CodeSection/CodeSection";
// import { useParams } from "react-router";

const Question = () => {
  // const { id } = useParams();
  // console.log(id);
  return (
    <Split className="split" gutterSize={13} gutterAlign="end" minSize={0}>
      <Problem   />
      <CodeSection />
    </Split>
  );
};

export default Question;
