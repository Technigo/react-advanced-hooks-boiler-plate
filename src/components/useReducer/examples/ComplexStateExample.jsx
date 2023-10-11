// Importing the useReducer hook from React to manage state in our component.
import { useReducer } from "react";
export const ComplexStateExample = () => {
  const content = {
    heading: `Counter Component. 
          `,
    subHeading:
      "On the other hand, the TodoList component is a bit more complex but works in a similar way. It uses useReducer to manage a list of 'to-dos'. The todoReducer function helps manage this list, deciding what to do when you want to add a new to-do item or change an existing one. The TodoList component shows your to-do items in a list and has a button to add more. When you click an item in the list, it gets marked as done or undone. When you click the button to add a new item, it asks you for the text of the new to-do and then adds it to the list. All these changes (adding a new to-do or marking one as done/undone) are managed in an organized way by the todoReducer function, keeping everything running smoothly.",
  };

  // Defining a reducer function that manages the addition and toggling of to-dos.
  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        // If the action type is 'ADD_TODO', return a new state with the new to-do added.
        return [...state, { text: action.text, completed: false }];
      case "TOGGLE_TODO":
        // If the action type is 'TOGGLE_TODO', return a new state with the completed status toggled for the specified to-do.
        return state.map((todo, idx) =>
          idx === action.idx ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        // If the action type is not recognized, throw an error.
        throw new Error();
    }
  };
  // Using useReducer to manage the state of our component, initializing with an empty array of to-dos.
  const [todos, dispatch] = useReducer(todoReducer, []);

  // Defining a function to dispatch an 'ADD_TODO' action with the specified text.
  const addTodo = (text) => dispatch({ type: "ADD_TODO", text });
  // Defining a function to dispatch a 'TOGGLE_TODO' action with the specified index.
  const toggleTodo = (idx) => dispatch({ type: "TOGGLE_TODO", idx });

  return (
    <div>
      <h5>{content.heading}</h5>
      <p>{content.subHeading}</p>
      {/* Rendering a list of to-dos, which can be clicked to toggle their completed status. */}
      <ul>
        {todos.map((todo, idx) => (
          <li
            key={idx}
            onClick={() => toggleTodo(idx)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      {/* When the Add Todo button is clicked, call addTodo with the text entered by the user. */}
      <button onClick={() => addTodo(prompt("Enter todo text:"))}>
        Add Todo
      </button>
    </div>
  );
};
