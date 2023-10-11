import { FetchData } from "./examples/FetchData";
import { Geolocation } from "./examples/Geolocation";
export const CustomHooksDistributive = () => {
  const content = {
    heading: "Custom Hooks",
    subHeadingOne: "Data fetching",
    subHeadingTwo: "Geolocation",
  };

  return (
    <div className="wrapper">
      <h3>{content.heading}</h3>
      <div className="wrapper-inner">
        <h4>{content.subHeadingOne}</h4>
        <FetchData />
      </div>
      <div className="wrapper-inner">
        <h4>{content.subHeadingTwo}</h4>
        <Geolocation />
      </div>
    </div>
  );
};
