import React from 'react';
import './App.css'; // Arquivo CSS para estilização

function Calculator() {
  return (
    <div className="calculator">
      <div className="calc-name">Calculadora ADS</div>
      <input type="text" className="display" value="0" readOnly />
      <div className="buttons">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="operator">+</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="operator">-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="operator">*</button>

        <button>0</button>
        <button>.</button>
        <button className="clear">AC</button>
        <button className="operator">/</button>

        <button className="equal">=</button>
      </div>
    </div>
  );
}

export default Calculator;
