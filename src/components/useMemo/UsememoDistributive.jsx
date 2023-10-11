import { HeavyComputationExample } from "./examples/HeavyComputationExample";
import { RenderingListsExample } from "./examples/RenderingListsExample";

export const UsememoDistributive = () => {
  const content = {
    heading: "The UseMemo Hook",
    subHeadingOne: "UseMemo Optimization Examples ",
    subHeadingTwo: "Manipulating Lists",
  };
  return (
    <div className="wrapper">
      <h3>{content.heading}</h3>
      <div className="wrapper-inner">
        <h4>{content.subHeadingOne}</h4>
        <HeavyComputationExample />
      </div>
      <div className="wrapper-inner">
        <h4>{content.subHeadingTwo}</h4>
        <RenderingListsExample />
      </div>
    </div>
  );
};
