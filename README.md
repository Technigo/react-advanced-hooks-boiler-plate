 <img src="/src/assets/hooks-bp.svg" alt="Project Banner Image">

# React Advanced Hooks Boilerplate

Welcome to the `React Advanced Hooks Boilerplate`!

This repository is designed to provide a solid starting point for working with advanced React hooks, including useRef, useReducer, useLayoutEffect, and custom hooks. Navigate through various examples and understand the practical implementation of these hooks in a React application.

## Demo

[You can check out a Demo of this boilerplate here.](https://react-advanced-hooks-boiler-plate.netlify.app/)

## Getting Started

1.  Clone the repository to your local machine.
2.  Install the required dependencies using `npm install`.
3.  Start the development server using `npm run dev`.

## Overview

This boilerplate is structured to give you a hands-on experience and understanding of some of the advanced hooks in React. Each hook is demonstrated with practical examples to showcase its utility and implementation in real-world applications.

### useRef Hook

- Purpose: Manage and retain state without causing re-render of the component.
- Examples:
  - [Dom Elements Example](https://github.com/Technigo/react-advanced-hooks-boiler-plate/blob/main/src/components/useRef/Examples/DomElementsExample.jsx): Demonstrates how to reference DOM elements.
  - [Managing Instances Example](https://github.com/Technigo/react-advanced-hooks-boiler-plate/blob/main/src/components/useRef/Examples/ManagingInstancesExample.jsx): Illustrates managing instances with `useRef`.
  - [Preserving Values Example](https://github.com/Technigo/react-advanced-hooks-boiler-plate/blob/main/src/components/useRef/Examples/PreservingValuesExample.jsx): Showcases preserving values between renders without causing re-renders.

### useReducer Hook

- Purpose: Manage state logic in components with a reducer function for more predictable state transitions.
- Examples:
  - [Basic State Example](https://github.com/Technigo/react-advanced-hooks-boiler-plate/blob/main/src/components/useReducer/examples/BasicStateExample.jsx): Basic implementation of `useReducer`.
  - [Complex State Example](https://github.com/Technigo/react-advanced-hooks-boiler-plate/blob/main/src/components/useReducer/examples/ComplexStateExample.jsx): Handling complex state logic with `useReducer`.

### useLayoutEffect Hook

- Purpose: Perform synchronous, side-effects that need to be executed before the DOM is painted.
- Examples:
  - [Example One](https://github.com/Technigo/react-advanced-hooks-boiler-plate/blob/main/src/components/useLayoutEffect/examples/ExampleOne.jsx): Basic usage of `useLayoutEffect`.
  - [Example Two](https://github.com/Technigo/react-advanced-hooks-boiler-plate/blob/main/src/components/useLayoutEffect/examples/ExampleTwo.jsx): Another practical example of `useLayoutEffect`.

### Custom Hooks

- Purpose: Reuse stateful logic and side effects across components.
- Examples:
  - [useFetchData](https://github.com/Technigo/react-advanced-hooks-boiler-plate/blob/main/src/hooks/useFetchData.jsx): Custom hook for fetching data.
  - [useGeolocation](https://github.com/Technigo/react-advanced-hooks-boiler-plate/blob/main/src/hooks/useGeolocation.jsx): Custom hook for accessing geolocation.

---

Tip: Before you decide to delete all components and start from scratch, we suggest examining them closely to grasp their structure. They can act as a blueprint for your future work.

---

We hope this guide helps you navigate and make the most out of this boilerplate.

Happy coding, Technigo students! ❤️
