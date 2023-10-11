import { useRef, useEffect, useState } from "react";

export const PreservingValuesExample = () => {
  // Content
  const content = {
    heading:
      "In this PreservingValues component,  useRef is used to persist values across renders without causing re-renders, demonstrating its utility in various scenarios like capturing previous values, performing delayed actions with the current state, toggling values, tracking values, and managing instances without affecting the component render cycle.",
  };
  // Example 1: Capturing Previous State/Props
  // We're using a state to store and manage the input value.
  const [value, setValue] = useState("");
  // useRef is used here to store the previous value of the state without causing a re-render when it changes.
  const prevValueRef = useRef();

  useEffect(() => {
    // Every time the value state changes, we update the ref with the new value.
    // This allows us to "remember" the previous value without causing an additional render.
    prevValueRef.current = value;
  }, [value]);

  // ------
  // ------
  // ------

  // Example 2: Delayed Action with Current State
  // State to store the text input by the user.
  const [text, setText] = useState("");
  // Ref to store the current text value to be used inside the timeout function.
  const textRef = useRef();

  useEffect(() => {
    // We update the ref every time the text state changes, so it always has the latest value.
    textRef.current = text;
  }, [text]);

  const handleDelayedAlert = () => {
    setTimeout(() => {
      // Even if the text state changes in the future, textRef.current will hold the value of text at the moment this function was called.
      alert("You typed: " + textRef.current);
    }, 3000);
  };

  // ------
  // ------
  // ------

  // Example 3: Persistent Toggle without Re-render
  // Ref to store a boolean value that we can toggle. This won't cause re-renders when it changes.
  const isToggledRef = useRef(false);

  const handleToggleClick = () => {
    // We toggle the boolean value stored in isToggledRef.current.
    isToggledRef.current = !isToggledRef.current;
    // Logging the current value of the toggle.
    console.log("Is Toggled:", isToggledRef.current);
  };

  // ------
  // ------
  // ------

  // Example 4: Tracking Mouse Movement without Re-render
  // Ref to store the mouse position, which can change frequently without causing re-renders.
  const mousePositionRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Updating the ref with the latest mouse position.
    mousePositionRef.current = { x: e.clientX, y: e.clientY };
    // Logging the current mouse position.
    console.log("Mouse Position:", mousePositionRef.current);
  };

  useEffect(() => {
    // Adding an event listener to track mouse movement and update the ref.
    window.addEventListener("mousemove", handleMouseMove);
    // Cleaning up the event listener when the component is unmounted.
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ------
  // ------
  // ------

  // Example 5: Managing Form Submission with Current Form Data
  // State to manage the form data.
  const [formData, setFormData] = useState({ username: "", email: "" });
  // Ref to store the current form data to be used in the timeout function.
  const formDataRef = useRef();

  // Always updating the ref with the latest form data.
  formDataRef.current = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Updating the state with the new form data.
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    setTimeout(() => {
      // Logging the form data at the moment handleSubmit was called, even if formData changes in the future.
      console.log("Submitted Data:", formDataRef.current);
    }, 2000);
  };

  // Rendering the UI elements for each example
  return (
    <div>
      <h5>{content.heading}</h5>
      {/* UI for Example 1 */}
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValueRef.current}</p>

      {/* UI for Example 2 */}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleDelayedAlert}>Show Alert</button>

      {/* UI for Example 3 */}
      <button onClick={handleToggleClick}>Toggle Value</button>

      {/* UI for Example 4 */}
      <p>Move the mouse and check the console for the position!</p>

      {/* UI for Example 5 */}
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
