import { useMemo } from "react";

export const HeavyComputationExample = ({ value }) => {
  const content = {
    heading:
      "These examples showcase various ways useRef can be used to interact with and manipulate DOM elements directly within functional components in React. ",
  };
  // ------
  // ------
  // ------

  // Example 1
  // Using useMemo to optimize a heavy computation: summing up a large number of values
  const sumComputation = useMemo(() => {
    // Initializing the result variable to store the sum
    let result = 0;
    // Performing a heavy computation: a loop that sums up a large number of values
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    // Returning the result of the computation which will be memorized by useMemo
    return result;
  }, [value]); // useMemo will only re-run the computation if `value` changes

  // Explanation:
  // useMemo for Sum Computation: The first useMemo hook is used to optimize a heavy computation that involves summing a large range of numbers. The result of this computation is stored and will only be recalculated if the value prop changes, thanks to the dependency array [value]. This ensures that the computationally expensive loop doesn’t run on every render, but only when it's actually necessary, thereby optimizing performance.

  // ------
  // ------
  // ------

  // Example 2
  // Using useMemo to optimize another heavy computation: calculating a large factorial
  const factorialComputation = useMemo(() => {
    // Initializing the result variable to store the factorial
    let result = 1;
    // Performing a heavy computation: a loop that calculates the factorial of `value`
    for (let i = 1; i <= value; i++) {
      result *= i;
    }
    // Returning the result of the computation which will be memorized by useMemo
    return result;
  }, [value]); // useMemo will only re-run the computation if `value` changes

  // Explanation
  // useMemo for Factorial Computation: The second useMemo hook is used to optimize another heavy computation that calculates the factorial of the value prop. Similar to the first computation, the result is stored and only recalculated when value changes, ensuring optimized performance by preventing unnecessary recalculations.

  // ------
  // ------
  // ------
  return (
    <div>
      <h5>{content.heading}</h5>
      <div>
        {/* Displaying the result of the first heavy computation */}
        <p>The result of an expensive sum computation is {sumComputation}</p>
        {/* Displaying the result of the second heavy computation */}
        <p>
          The factorial of {value} is {factorialComputation}
        </p>
      </div>
    </div>
  );
};
