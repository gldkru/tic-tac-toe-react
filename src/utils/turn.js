export const turnIsRecorded = (turns, value) => turns.includes(value);

const checkWin = (winningState, state) =>
  winningState.every((number) => state.includes(number));

export const calculateWinner = ({ xState, oState, winningStates }) => {
  let winner = false;

  winningStates.forEach((winningState) => {
    const xWins = checkWin(winningState, xState);
    const oWins = checkWin(winningState, oState);

    if (xWins || oWins) {
      winner = xWins ? 'x' : 'o';

      return;
    }
  });

  return winner;
};

export const calculateGameOver = (turns) => turns.length === 9;
