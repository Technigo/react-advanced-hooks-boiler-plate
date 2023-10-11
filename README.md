 <img src="/src/assets/hooks-bp.svg" alt="Project Banner Image">

# React Advanced Hooks Boilerplate

Welcome to the `React Advanced Hooks Boilerplate`!

This repository is designed to provide a solid starting point for working with advanced React hooks, including useRef, useReducer, useLayoutEffect, useMemo, and custom hooks. Navigate through various examples and understand the practical implementation of these hooks in a React application.

## Demo

[You can check out a Demo of this boilerplate here.](https://react-advanced-hooks-boiler-plate.netlify.app/)

## Getting Started

1.  Clone the repository to your local machine.
2.  Install the required dependencies using `npm install`.
3.  Start the development server using `npm run dev`.

## Navigating the Repository

### App Component (`src/App.jsx`)

The `App.jsx` is the main component of the application. Here's a breakdown of its structure:

- Reactive Data: Demonstrates the use of React hooks (`useState`) to manage state. For instance, there's a counter and a name changer to showcase how reactive data works in React.
- Static Data: This data is used to populate the content of the app. It includes headings, descriptions, and examples.
- Component Rendering: Various components from the `components` folder are rendered here to showcase their usage.

### Components (`src/components/`)

This folder contains multiple React components. Let's dive into each:

1.  Logos (`Logos.jsx`): Displays the logos of Vite, React, and Technigo. Each logo is linked to its respective official website.

2.  StaticComponent (`StaticComponent.jsx`): A simple static component with no reactive data or JS logic. It contains an H4 and a paragraph element.

3.  PropComponent (`PropComponent.jsx`): Demonstrates the use of props in React. It displays a small bio based on the props passed to it. For instance, it can tell if a person likes pineapple pizza or not!

4.  PropComponentPropTypes (`PropComponentPropTypes.jsx`): Similar to the `PropComponent`, but with added PropTypes for type checking. It ensures that the component receives the right type of data for its props. If you want to see a PropTypes error, try removing the `name` prop in the `App.jsx` file and check the console.

5.  ComponentWithCss (`ComponentWithCss/Component.jsx`): This component showcases how to organize styles with components. It has its own CSS file (`style.css`) in the same folder. It also explains why we use `className` in React instead of `class`.

---

Tip: Before you decide to delete all components and start from scratch, we suggest examining them closely to grasp their structure. They can act as a blueprint for your future work.

---

We hope this guide helps you navigate and make the most out of this boilerplate.

Happy coding, Technigo students!
