import React, { useState } from 'react';
import './style.css';

export const App = () => {
  const [xState, setXState] = useState([]);
  const [oState, setOState] = useState([]);
  const [xTurn, setXTurn] = useState(true);
  // const [number, setNumber] = useState();

  const handleClick = (index) => {
    if (xTurn) {
      setXState([...xState, index]);
    } else {
      setOState([...oState, index]);
    }

    setXTurn(!xTurn);
  };

  const compare = (index) => {
    if (xState.includes(index)) {
      return 'x';
    } else if (oState.includes(index)) {
      return 'o';
    }
  };

  return (
    <div className="grid">
      {Array.from(Array(9)).map((_, index) => (
        <div
          className={`cell ${compare(index)}`}
          key={index}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};
