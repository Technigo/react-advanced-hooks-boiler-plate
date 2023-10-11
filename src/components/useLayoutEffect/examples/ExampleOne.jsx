import { useState, useLayoutEffect } from "react";

export const ExampleOne = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Explanation
  // seLayoutEffect updates the document title with the current count before the browser repaints to ensure that the title is updated synchronously with the state.
  // The count is incremented when the button is clicked.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
