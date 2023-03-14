import React, { useState, useMemo } from 'react';
import {
  turnIsRecorded,
  calculateWinner,
  calculateGameOver,
} from '../utils/turn';
import { winningStates } from '../utils/consts';

import { Grid } from './Grid';
import { Result } from './Result';
import { Button } from './Button';

export const Game = () => {
  const [xState, setXState] = useState([]);
  const [oState, setOState] = useState([]);
  const [xTurn, setXTurn] = useState(true);

  const [showRules, setShowRules] = useState(false);

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
    // console.log(index);

    if (xState.includes(index)) {
      return 'x';
    } else if (oState.includes(index)) {
      return 'o';
    }
  };

  const restartGame = () => {
    setXState([]);
    setOState([]);
    setXTurn(true);
  };

  const result = useMemo(() => {
    const gameOver = calculateGameOver([...xState, ...oState]);
    let winner = false;

    if (!gameOver) {
      winner = calculateWinner({ xState, oState, winningStates });

      if (!winner) {
        return null;
      }
    }

    return (
      <Result>
        <p>
          {gameOver ? 'Game over!' : winner === 'x' ? 'X wins!' : 'O wins!'}
        </p>
        <Button onClick={restartGame} alt="Restart game">
          Restart game
        </Button>
      </Result>
    );
  }, [xState, oState]);

  return (
    <>
      <h2>❌⭕ Tic-Tac-Toe</h2>
      <button onClick={() => setShowRules(!showRules)}>Показать правила</button>
      {showRules && <p>Тут были правила, но мы их ...</p>}
      <br />
      <div className="grid-parent">
        {result}
        <Grid onCellClick={turn} compare={compare} />
      </div>
    </>
  );
};
