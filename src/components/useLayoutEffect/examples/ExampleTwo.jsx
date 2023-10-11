import { useState, useLayoutEffect } from "react";

// In this example, useLayoutEffect is used to dynamically switch between light and dark themes to avoid flickering when the component mounts.
export const ExampleTwo = () => {
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // In the provided example, a button facilitates the toggling between light and dark themes within a user interface. The useLayoutEffect hook is strategically utilized to adeptly apply the respective theme class to the body element of the document, ensuring this action is completed before the browser has the opportunity to repaint. This preemptive application is crucial as it adeptly avoids any potential flickering when the theme undergoes a change, thereby ensuring a smooth and visually pleasing transition for users. Furthermore, the distinct visual styles attributed to the light and dark themes are defined and managed through CSS classes, which encapsulate the specific stylistic properties for each theme, ensuring a consistent and accurate visual representation upon activation

  return (
    <div>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
