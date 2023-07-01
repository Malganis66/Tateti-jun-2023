import { WINNER_COMBOS } from '../constants.js'
export const checkWinnerFrom = (boardTocheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardTocheck[a] &&
      boardTocheck[a] === boardTocheck[b] &&
      boardTocheck[a] === boardTocheck[c]
    ) {
      return boardTocheck[a]
    }
  }
  return null
}

export const chechEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
