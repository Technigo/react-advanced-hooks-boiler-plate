import { BasicStateExample } from "./examples/BasicStateExample";
import { ComplexStateExample } from "./examples/ComplexStateExample";

export const UseReducerDistributive = () => {
  // Staticc Data Inyected through {} reference
  const content = {
    heading: "The UseReducer Hook",
    subHeadingOne: "Simple State Management ",
    subHeadingTwo: "Complex State Management",
  };
  return (
    <div className="wrapper">
      <h3>{content.heading}</h3>
      <div className="wrapper-inner">
        <h4>{content.subHeadingOne}</h4>
        <BasicStateExample />
      </div>
      <div className="wrapper-inner">
        <h4>{content.subHeadingTwo}</h4>
        <ComplexStateExample />
      </div>
    </div>
  );
};
