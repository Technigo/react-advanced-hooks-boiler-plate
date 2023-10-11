import { UseRefDistributive } from "./components/useRef/UseRefDistributive";
import { UsememoDistributive } from "./components/useMemo/UsememoDistributive";
import { UseReducerDistributive } from "./components/useReducer/UseReducerDistributive";
import { UseLayoutEffectDistributive } from "./components/useLayoutEffect/UseLayoutEffectDistributive";
import { CustomHooksDistributive } from "./components/customHooks/CustomHooksDistributive";

export const App = () => {
  // Staticc Data Inyected through {} reference
  const appContent = {
    heading: "Technigo - Advanced Hooks Boilerplate",
    reactivedataExampleOne:
      "Within this repo you can find a working example of the following hooks: useRef, useMemo, useLayoutEffect, useReducer and some custom hooks 😉",
  };
  return (
    <div>
      <h1>{appContent.heading}</h1>
      <p>{appContent.reactivedataExampleOne}</p>
      {/* Hooks Here */}
      <UseRefDistributive />
      <UsememoDistributive />
      <UseReducerDistributive />
      <UseLayoutEffectDistributive />
      <CustomHooksDistributive />
    </div>
  );
};
