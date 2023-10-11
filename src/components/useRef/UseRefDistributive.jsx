import { DomElementsExample } from "./Examples/DomElementsExample";
import { PreservingValuesExample } from "./Examples/PreservingValuesExample";
import { ManagingInstancesExample } from "./Examples/ManagingInstancesExample";

export const UseRefDistributive = () => {
  // Staticc Data Inyected through {} reference
  const content = {
    heading: "The UseRef Hook",
    subHeadingOne: "Interacting with DOM Elements ",
    subHeadingTwo: "Managing Instances",
    subHeadingThree: "Preserving Values",
  };
  return (
    <div className="wrapper">
      <h3>{content.heading}</h3>
      <div className="wrapper-inner">
        <h4>{content.subHeadingOne}</h4>
        <DomElementsExample />
      </div>
      <div className="wrapper-inner">
        <h4>{content.subHeadingThree}</h4>
        <PreservingValuesExample />
      </div>
      <div className="wrapper-inner">
        <h4>{content.subHeadingTwo}</h4>
        <ManagingInstancesExample />
      </div>
    </div>
  );
};
