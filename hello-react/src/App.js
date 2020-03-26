import React, { useState } from "react";
import "./App.css";
// import EventPractice from './EventPractice';
// import RefSample from './RefSample';
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const App = () => {
  const [color, setColor] = useState("#000000");

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div>
      <button onClick={handleClick}>Random Color!</button>
      <ErrorBoundary>
        <LifeCycleSample color={color} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
