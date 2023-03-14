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

  const winnerText = useMemo(() => {
    const winner = calculateWinner({ xState, oState, winningStates });

    if (winner) {
      return winner === 'x' ? 'X wins!' : 'O wins!';
    } else if (calculateGameOver([...xState, ...oState])) {
      return 'Game over!';
    }
  }, [xState, oState]);

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

  return (
    <>
      <h2>❌⭕ Tic-Tac-Toe</h2>
      <button onClick={() => setShowRules(!showRules)}>Показать правила</button>
      {showRules && <p>Тут были правила, но мы их ...</p>}
      <br />
      <div className="grid-parent">
        {winnerText ? (
          <Result>
            <p>{winnerText}</p>
            <Button onClick={restartGame} alt="Restart game">
              Restart game
            </Button>
          </Result>
        ) : null}
        <Grid onCellClick={turn} compare={compare} />
      </div>
    </>
  );
};
