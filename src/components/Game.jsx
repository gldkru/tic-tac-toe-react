import React from 'react';

import { Grid } from './Grid';
import { Result } from './Result';
import { Button } from './Button';
import { useGame } from '../hooks/useGame';
import { Rules } from './Rules';

export const Game = () => {
  const { turn, restartGame, result, compare } = useGame();

  return (
    <>
      <h2>❌⭕ Tic-Tac-Toe</h2>
      <Rules />
      <br />
      <div className="grid-parent">
        {result && (
          <Result>
            <p>{result}</p>
            <Button onClick={restartGame} alt="Restart game">
              Restart game
            </Button>
          </Result>
        )}
        <Grid onCellClick={turn} compare={compare} />
      </div>
    </>
  );
};
