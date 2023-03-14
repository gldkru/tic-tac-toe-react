import { useState, useMemo } from 'react';
import {
  turnIsRecorded,
  calculateWinner,
  calculateGameOver,
} from '../utils/turn';
import { winningStates } from '../utils/consts';

export const useGame = (firstXTurn = true) => {
  const [xState, setXState] = useState([]);
  const [oState, setOState] = useState([]);
  const [xTurn, setXTurn] = useState(() => firstXTurn);

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

    return gameOver ? 'Game over!' : winner === 'x' ? 'X wins!' : 'O wins!';
  }, [xState, oState]);

  // todo
  const compare = (index) => {
    // console.log(index);

    if (xState.includes(index)) {
      return 'x';
    } else if (oState.includes(index)) {
      return 'o';
    }
  };

  return {
    turn,
    restartGame,
    result,
    compare,
  };
};
