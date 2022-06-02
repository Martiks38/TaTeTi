import { Cell, DataGame } from '../interface/cell'

const checkWinner = (matrix: Cell[][]): boolean | undefined => {
  for (let indA = 0; indA < 3; indA++) {
    // Para saber si se gano por columna o fila y que al evaluar no se pisen entre ellas
    let wonR = true
    let wonC = true

    let symbolRow = matrix[indA][0].symbol
    let symbolCol = matrix[0][indA].symbol

    for (let indB = 0; indB < 3; indB++) {
      // Row
      if (matrix[indA][indB].symbol !== symbolRow || !symbolRow) wonR = false
      // Column
      if (matrix[indB][indA].symbol !== symbolCol || !symbolCol) wonC = false

      if (indB === 2 && (wonR || wonC)) return true
    }
  }

  let wonD = true
  let wonDO = true
  // Es necesario que se evalue en el medio ya que la diagonal otra diagonal no pasa por matrix[0][0]
  let symbolD = matrix[1][1].symbol

  for (let ind = 0; ind < 3; ind++) {
    if (matrix[ind][ind].symbol !== symbolD || !symbolD) wonD = false
    if (matrix[ind][2 - ind].symbol !== symbolD || !symbolD) wonDO = false
    if (ind === 2 && (wonD || wonDO)) return true
  }

  return false
}

const isDraw = (matrix: Cell[][]) => {
  let matrixDraw = matrix.map((row) =>
    row.map((cell) =>
      cell.symbol === undefined ? { ...cell, symbol: 'circle' } : cell
    )
  )

  return checkWinner(matrixDraw as Cell[][]) ? false : true
}

const msgWinner = (dataGame: DataGame) => {
  let result = checkWinner(dataGame.matrix)

  return result
    ? { end: true, msg: `The winner is "player ${!dataGame.player ? 1 : 2}"` }
    : isDraw(dataGame.matrix)
    ? { end: true, msg: 'Draw' }
    : { end: false, msg: '' }
}

export { msgWinner }
