import { ExampleOne } from "./examples/ExampleOne";
import { ExampleTwo } from "./examples/ExampleTwo";

export const UseLayoutEffectDistributive = () => {
  const content = {
    heading: "The UseLayoutEffect Hook",
    subHeadingOne: "Counter",
    subHeadingTwo: "Toggle Theme",
  };

  return (
    <div className="wrapper">
      <h3>{content.heading}</h3>
      <div className="wrapper-inner">
        <h4>{content.subHeadingOne}</h4>
        <ExampleOne />
      </div>
      <div className="wrapper-inner">
        <h4>{content.subHeadingTwo}</h4>
        <ExampleTwo />
      </div>
    </div>
  );
};
