import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [result, setResult] = useState("");

  const renderDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={handleNumberBtnClick} key={i} className="grid-item">
          {i}
        </button>
      );
    }
    return digits;
  };

  const handleNumberBtnClick = (e) => {
    if (!operand1) {
      setOperand1((operand1) => operand1 + e.target.innerText);
    }
    if (operator) {
      setOperand2((operand2) => operand2 + e.target.innerText);
    }
  };

  const handleOperetorBtnClick = (e) => {
    // console.log("operand1", operand1);
    if (result) {
      setOperand1(result);
    }

    if (operator) {
      setOperator(e.target.innerText);
    }
    if (operand1) {
      setOperator(e.target.innerText);
    }
    //  else if (operand1 && operator) {
    //   setOperator(e.target.innerText);
    // }
    if (operand1 && operator && operand2) {
      setResult(equals(operator, operand1, operand2));
    } else {
      return;
    }
  };

  const handlePeriodBtnClick = (e) => {
    if (!operand1 || operand1.includes(".")) {
      return;
    } else {
      setOperand1((operand1) => operand1 + e.target.innerText);
    }

    if (!operand2 || operand2.includes(".")) {
      return;
    } else {
      setOperand2((operand2) => operand2 + e.target.innerText);
    }
  };

  const handleEqualBtnClick = () => {
    // console.log("operand1", operand1);
    // console.log("result", result);
    if (operator && operand1 && operand2) {
      setResult(equals(operator, operand1, operand2));
      // setOperand1(result);
    } else {
      return;
    }
  };

  const equals = (operator, operand1, operand2) => {
    let result;
    switch (operator) {
      case "/":
        result = String(parseFloat(operand1) / parseFloat(operand2));
        break;

      case "x":
        result = String(parseFloat(operand1) * parseFloat(operand2));
        break;

      case "+":
        result = String(parseFloat(operand1) + parseFloat(operand2));
        break;

      case "-":
        result = String(parseFloat(operand1) - parseFloat(operand2));
        break;
      default:
        return;
    }
    return result;
  };
  return (
    <div className="container">
      <div className="display">
        <input
          placeholder="0"
          type="text"
          value={result}
          //  onChange={result}
        />
      </div>
      <div className="operators">
        <button onClick={handleOperetorBtnClick}>+</button>
        <button onClick={handleOperetorBtnClick}>-</button>
        <button onClick={handleOperetorBtnClick}>x</button>
        <button onClick={handleOperetorBtnClick}>/</button>
      </div>
      <div className="grid-container">
        {renderDigits()}
        <button onClick={handleNumberBtnClick}>0</button>
        <button onClick={handlePeriodBtnClick}>.</button>
        <button onClick={handleEqualBtnClick}>=</button>
      </div>
    </div>
  );
};

export default App;
