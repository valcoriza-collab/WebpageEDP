import { useState } from 'react';

function Counter() {
  const myname = "Verhel Justin";
  const myintro = "This is my first React project";
  const [myvalue, setMyvalue] = useState(0);

  const plusone = () => {
    if (myvalue + 1 > 10) {
      setMyvalue(0);
    } else {
      setMyvalue(myvalue + 1);
    }
  };

  const minusone = () => {
    if (myvalue - 1 < 0) {
      setMyvalue(0);
    } else {
      setMyvalue(myvalue - 1);
    }
  };

  return (
    <div className="content-container">
      <h1>Hello World. My name is {myname}</h1>
      <h3>{myintro}</h3>
      <div className="mydiv">
        <h3>The value of x is {myvalue}</h3>
        <div className="button-group">
          <button className="action-btn" onClick={plusone}>Touch Me</button>
          <button className="action-btn" onClick={minusone}>Touch Me Not</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;