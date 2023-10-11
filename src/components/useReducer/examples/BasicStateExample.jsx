// Importing the useReducer hook from React to manage state in our component.
import { useReducer } from "react";

export const BasicStateExample = () => {
  const content = {
    heading: `Okay, let’s imagine we're dealing with a box full of comments from various users and we want to show these comments on our website. These comments are stored somewhere on the internet and we want our webpage to grab them and display them in a neat list. 
          `,
    subHeading:
      "The Counter component is a small part of a React app that uses a tool called useReducer to manage its state, which in this case is just a number displayed on the screen. The counterReducer function helps decide what the new number (state) should be when a user clicks a button to increase or decrease it. The Counter component shows the current number and has two buttons. When you click a button, it tells the counterReducer function what to do (either add or subtract 1 from the number) by sending it a message, like 'INCREMENT'. The counterReducer function listens to this message and changes the number accordingly, which then updates on your screen.",
  };

  // Defining a reducer function that determines how the state should change based on the action type.
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        // If the action type is 'INCREMENT', return a new state with the count increased by 1.
        return { count: state.count + 1 };
      case "DECREMENT":
        // If the action type is 'DECREMENT', return a new state with the count decreased by 1.
        return { count: state.count - 1 };
      default:
        // If the action type is not recognized, throw an error.
        throw new Error();
    }
  };
  // Using useReducer to manage the state of our component, initializing with a count of 0.
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      <h5>{content.heading}</h5>
      <p>{content.subHeading}</p>
      {/* Rendering the current count. */}
      Count: {state.count}
      {/* When the +1 button is clicked, dispatch an 'INCREMENT' action to the reducer. */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      {/* When the -1 button is clicked, dispatch a 'DECREMENT' action to the reducer. */}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
