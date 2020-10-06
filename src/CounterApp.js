import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value, saludo }) => {
  const [counter, setCounter] = useState(value);

  const handleButton = () => setCounter(counter + 1);
  const handleReset = () => setCounter(value);
  const handleSubtract = () => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>Hola soy {saludo}</h2>
      <h2> {counter} </h2>

      <button onClick={handleButton}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
  saludo: PropTypes.string,
};
CounterApp.defaulProps = {
  saludo: "Daniel",
};

export default CounterApp;
