import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");

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
    if (!operator) {
      setOperand1((operand1) => operand1 + e.target.innerText);
    } else {
      setOperand2((operand2) => operand2 + e.target.innerText);
    }
  };

  const handleOperetorBtnClick = (e) => {
    if (operand1 || (operand1 && operator)) {
      setOperator(e.target.innerText);
    }

    if (operand1 && operator && operand2) {
      setOperand1(equals(operator, operand1, operand2));
      setOperand2("");
    } else {
      return;
    }
  };

  const handlePeriodBtnClick = (e) => {
    if (!operand1 || (operand1.includes(".") && !operand2)) {
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
    if (operator && operand1 && operand2) {
      setOperand1(equals(operator, operand1, operand2));
      setOperand2("");
    } else {
      return;
    }
  };

  const percentage = (percent, total) => {
    return ((percent / 100) * total).toFixed(2);
  };

  const handleBackspaceBtnClick = () => {
    if (operand2) {
      const slicedOperand2 = operand2.slice(0, -1);
      setOperand2(slicedOperand2);
    }

    const slicedOperand1 = operand1.slice(0, -1);
    setOperand1(slicedOperand1);
  };

  const handleClearInputBtnClick = () => {
    setOperand1("");
    setOperand2("");
    setOperator("");
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
      case "%":
        result = percentage(operand1, operand2);
        break;
      default:
        return;
    }
    return result;
  };
  return (
    <div className="container">
      <div className="display">
        <div className="input">
          {/*{!operand2 ? operand1 : operand2} */}
          {operand2 || operand1}
        </div>
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
        <button onClick={handleClearInputBtnClick}>AC</button>
        <button onClick={handleBackspaceBtnClick}>C</button>
        <button onClick={handleOperetorBtnClick}>%</button>
      </div>
    </div>
  );
};

export default App;
