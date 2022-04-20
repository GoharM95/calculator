import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const renderDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={handleDigitBtnClick} key={i} className="grid-item">
          {i}
        </button>
      );
    }
    return digits;
  };

  const updateInputValue = (e) => {
    console.log("e.target.innerText", e.target.innerText);

    setInputValue(e.target.innerText);
    console.log("inputValue", inputValue);
  };

  const handleInputChange = (e) => {
    // console.log("inputValue", inputValue);
    // console.log("e.target.innerText", e.target.innerText);
    if (inputValue.includes(".") && e.target.innerText === ".") {
      return;
    }
  };

  const handleOperatorBtnClick = () => {};
  const handleDigitBtnClick = () => {};
  const handleEqualsBtnClick = () => {};

  return (
    <div className="container">
      <div className="display">
        <input
          placeholder="0"
          type="text"
          value={inputValue}
          onChange={updateInputValue}
        />
      </div>
      <div className="operators">
        <button onClick={handleOperatorBtnClick}>+</button>
        <button onClick={handleOperatorBtnClick}>-</button>
        <button onClick={handleOperatorBtnClick}>x</button>
        <button onClick={handleOperatorBtnClick}>/</button>
      </div>
      <div className="grid-container">
        {renderDigits()}
        <button onClick={handleDigitBtnClick}>0</button>
        <button onClick={handleInputChange}>.</button>
        <button onClick={handleEqualsBtnClick}>=</button>
      </div>
    </div>
  );
};

export default App;
