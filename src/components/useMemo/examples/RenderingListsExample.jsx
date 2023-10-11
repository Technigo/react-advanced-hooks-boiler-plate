// Importing necessary hooks from React for state management, side effects, and memoization
import { useEffect, useState, useMemo } from "react";

// Defining and exporting a functional component named RenderingListsExample
export const RenderingListsExample = () => {
  const content = {
    heading: `Okay, let’s imagine we're dealing with a box full of comments from various users and we want to show these comments on our website. These comments are stored somewhere on the internet and we want our webpage to grab them and display them in a neat list. 
      `,
    subHeading:
      "Additionally, we want to be able to search through these comments. The online storage space (or API) we will be using is like an open library on the internet and is located at 'https://jsonplaceholder.typicode.com/comments'. This library is quite kind and allows us to grab some fake comments for free to use and display on our site.",
  };

  // ------
  // ------
  // ------
  // Defining a state variable 'comments' to store an array of comments and a function 'setComments' to update it
  const [comments, setComments] = useState([]);
  // Defining a state variable 'search' to store the search query and a function 'setSearch' to update it
  const [search, setSearch] = useState("");

  // Using the useEffect hook to fetch comments data once the component is mounted
  useEffect(() => {
    // Defining an asynchronous function 'getComments' to fetch comments from an API
    const getComments = async () => {
      // Sending a GET request to fetch comments data from the API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      // Parsing the JSON response and storing it in 'data'
      const data = await response.json();
      // Updating the 'comments' state with the fetched data
      setComments(data);
    };
    // Invoking the 'getComments' function to fetch and set the comments data
    getComments();
  }, []); // Empty dependency array means this useEffect runs once when component mounts and not on subsequent renders

  // Using the useMemo hook to optimize filtering of comments based on the search query
  const searchedComments = useMemo(() => {
    // Returning the filtered comments array, which includes comments that contain the search query
    return comments.filter((comment) =>
      comment.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [comments, search]); // Recomputes the memoized value only when 'comments' or 'search' state changes

  // Rendering the component UI
  return (
    <>
      <h5>{content.heading}</h5>
      <h6>{content.subHeading}</h6>
      {/* Displaying a paragraph element with static text */}
      <p>Search Between Comments</p>
      {/* Rendering an input element for user to type search query, and managing its value and change event with React state */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Updating 'search' state with input value on change
        placeholder="Find comments..."
      />
      {/* Rendering a list of comments that match the search query */}
      <details>
        <summary>Expand to view all comments</summary>
        <ul>
          {/* Mapping over 'searchedComments' array and rendering each comment in a list item */}
          {searchedComments.map((comment) => (
            <li key={comment.id}>
              {/* Displaying the comment name and body in the list item */}
              {comment.name}: {comment.body}
            </li>
          ))}
        </ul>
      </details>
    </>
  );
};

// EXPLANATION
// useState: Two state variables, comments and search, are defined using the useState hook to store the fetched comments and the search query, respectively.

// useEffect: The useEffect hook is utilized to fetch comments from an API when the component mounts. An asynchronous function getComments is defined and invoked within the useEffect to handle the API request. The empty dependency array [] ensures that this effect only runs once (on mount).

// useMemo: The useMemo hook is used to optimize the filtering of comments based on the search query. It returns a new array, searchedComments, containing comments that match the search query and only recomputes this array when the comments or search state changes (as specified in the dependency array [comments, search]).

// Rendering: The component renders a search input and a list of comments that match the search query. The searchedComments array, computed using useMemo, is mapped over to render each comment in a list item, ensuring that only relevant comments are rendered and unnecessary re-renders are minimized.
