import React, { useState } from 'react';
import {
  turnIsRecorded,
  calculateWinner,
  calculateGameOver,
} from './utils/turn';
import { winningStates } from './utils/consts';
import './style.css';

export const App = () => {
  const [xState, setXState] = useState([]);
  const [oState, setOState] = useState([]);
  const [xTurn, setXTurn] = useState(true);
  const [winnerText, setWinnerText] = useState('');

  if ((xState.length || oState.length) && winnerText === '') {
    const winner = calculateWinner({ xState, oState, winningStates });

    if (winner) {
      setWinnerText(winner === 'x' ? 'X wins!' : 'O wins!');
    } else if (calculateGameOver([...xState, ...oState])) {
      setWinnerText('Game over!');
    }
  }

  const turn = (id) => {
    if (!id && id !== 0) return;
    if (turnIsRecorded([...xState, ...oState], id)) return;

    if (xTurn) {
      setXState([...xState, id]);
    } else {
      setOState([...oState, id]);
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
    <div>
      {winnerText}
      <div className="grid">
        {Array.from(Array(9)).map((_, index) => (
          <div
            className={`cell ${compare(index)}`}
            key={index}
            onClick={() => turn(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
