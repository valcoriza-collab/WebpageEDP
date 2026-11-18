import { useState } from 'react';

function Calculator() {
  const [myname] = useState('Verhel Justin'); 
  const [result, setResult] = useState('0');

  const handleClick = (value) => {
    if (value === 'C') {
      setResult('0');
    } else if (value === '=') {
      try {
        const formattedExpression = result.replace(/x/g, '*').replace(/÷/g, '/');
        setResult(eval(formattedExpression).toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setResult((prev) => (prev === '0' || prev === 'Error' ? value : prev + value));
    }
  };

  return (
    <div className="content-container">
      <h1>Hi, my name is {myname}</h1>
      <div className="mydiv calc-div">
        <div className="display">{result}</div>
        <table>
          <tbody>
            <tr>
              <td onClick={() => handleClick('7')}>7</td>
              <td onClick={() => handleClick('8')}>8</td>
              <td onClick={() => handleClick('9')}>9</td>
              <td onClick={() => handleClick('C')}>C</td>
            </tr>
            <tr>
              <td onClick={() => handleClick('4')}>4</td>
              <td onClick={() => handleClick('5')}>5</td>
              <td onClick={() => handleClick('6')}>6</td>
              <td onClick={() => handleClick('÷')}>÷</td>
            </tr>
            <tr>
              <td onClick={() => handleClick('1')}>1</td>
              <td onClick={() => handleClick('2')}>2</td>
              <td onClick={() => handleClick('3')}>3</td>
              <td onClick={() => handleClick('x')}>×</td>
            </tr>
            <tr>
              <td onClick={() => handleClick('0')}>0</td>
              <td onClick={() => handleClick('-')}>-</td>
              <td onClick={() => handleClick('+')}>+</td>
              <td onClick={() => handleClick('=')}>=</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;