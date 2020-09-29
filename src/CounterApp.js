import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleButton = () => setCounter(counter + 1);
  const handleReset = () => setCounter(value);
  const handleSubtract = () => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleButton}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
