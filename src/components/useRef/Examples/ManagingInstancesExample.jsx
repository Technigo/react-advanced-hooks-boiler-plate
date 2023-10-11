import { useRef, useEffect, useState } from "react";
export const ManagingInstancesExample = () => {
  // Content
  const content = {
    heading:
      "In this ManagingInstancesExamples component, each example demonstrates a different use case of useRef to manage instances and persist values across renders without causing re-renders.",
  };
  // ------
  // ------
  // ------

  // Example 1: Timer with Pause and Resume
  const [time, setTime] = useState(0); // State to hold and display the time
  const [isRunning, setIsRunning] = useState(false); // State to toggle between running and paused
  const intervalRef = useRef(); // Ref to hold the interval instance

  useEffect(() => {
    if (isRunning) {
      // Starting the interval when isRunning is true
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Updating the time every second
      }, 1000);
    } else {
      // Clearing the interval when isRunning is false
      clearInterval(intervalRef.current);
    }
    // Cleanup: Clearing the interval when the component is unmounted
    return () => clearInterval(intervalRef.current);
  }, [isRunning]); // Dependency array: Effect will run when isRunning changes

  // ------
  // ------
  // ------

  // Example 2: Mouse Coordinates Tracker
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 }); // State to hold and display the current mouse coordinates
  const [lastCoordinates, setLastCoordinates] = useState({ x: 0, y: 0 }); // State to hold and display the last mouse coordinates after stopping
  const timeoutRef = useRef(); // Ref to hold the timeout instance

  const handleMouseMove = (e) => {
    // Updating the coordinates state with the current mouse position
    setCoordinates({ x: e.clientX, y: e.clientY });
    // Clearing the previous timeout
    clearTimeout(timeoutRef.current);
    // Setting a new timeout to update lastCoordinates after 1 second of inactivity
    timeoutRef.current = setTimeout(() => {
      setLastCoordinates(coordinates);
    }, 1000);
  };

  useEffect(() => {
    // Adding an event listener for mousemove to the window
    window.addEventListener("mousemove", handleMouseMove);
    // Cleanup: Removing the event listener when the component is unmounted
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [coordinates]); // Dependency array: Effect will run when coordinates change

  // ------
  // ------
  // ------

  // Example 3: Form Input with Delayed Submit
  const [inputValue, setInputValue] = useState(""); // State to hold and display the input value
  const submitTimeoutRef = useRef(); // Ref to hold the submit timeout instance

  const handleChange = (e) => {
    // Updating the inputValue state with the current input
    setInputValue(e.target.value);
    // Clearing the previous timeout
    clearTimeout(submitTimeoutRef.current);
    // Setting a new timeout to simulate a submit after 2 seconds of inactivity
    submitTimeoutRef.current = setTimeout(() => {
      console.log("Submitted:", inputValue); // Logging the submitted value
    }, 2000);
  };

  // ------
  // ------
  // ------

  // Rendering the UI elements for each example
  return (
    <div>
      <h5>{content.heading}</h5>
      {/* UI for Example 1 */}
      <p>Elapsed time: {time} seconds</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Resume"} Timer
      </button>

      {/* UI for Example 2 */}
      <p>Current coordinates: {`(${coordinates.x}, ${coordinates.y})`}</p>
      <p>Click on the screen to see coordinates change</p>
      <p>
        Last coordinates after stop:{" "}
        {`(${lastCoordinates.x}, ${lastCoordinates.y})`}
      </p>

      {/* UI for Example 3 */}
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Type something to submit after 2 seconds of inactivity</p>
    </div>
  );
};
