import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="calculator-grid">
        <div className="output">
          <div data-previous-operand className="previous-operand">123</div>
          <div data-current-operand className="current-opperand">1231</div>
        </div>
        <button type="button" className="data-all-clear">AC</button>
        <button type="button" className="data-plus-minus">+/-</button>
        <button type="button" className="data-percentage">%</button>
        <button type="button" className="data-operation">÷</button>
        <button type="button" className="data-number">7</button>
        <button type="button" className="data-number">8</button>
        <button type="button" className="data-number">9</button>
        <button type="button" className="data-operation">*</button>
        <button type="button" className="data-number">4</button>
        <button type="button" className="data-number">5</button>
        <button type="button" className="data-number">6</button>
        <button type="button" className="data-operation">-</button>
        <button type="button" className="data-number">1</button>
        <button type="button" className="data-number">2</button>
        <button type="button" className="data-number">3</button>
        <button type="button" className="data-operation">+</button>
        <button type="button" className="data-number" id="span-two">0</button>
        <button type="button" className="data-number">.</button>
        <button type="button" className="data-equals">=</button>
      </div>
    );
  }
}

export default Calculator;
