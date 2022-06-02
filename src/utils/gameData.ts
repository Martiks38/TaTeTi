import { Cell, DataGame } from '../interface/cell'
import type { SetDataGame } from '../types/gameTypes'

const initDataGame = () => {
  let number = 1

  let matrix = Array(3)
    .fill(Array(3).fill(' '))
    .map((row) =>
      row.map((_: string) => ({ symbol: undefined, id: `id-${number++}` }))
    )

  return {
    player: true,
    matrix,
  }
}

const handleDataGame = (
  target: EventTarget & HTMLElement,
  dataGame: DataGame,
  setDataGame: SetDataGame
) => {
  let newMatrix = dataGame.matrix.map((row) =>
    row.map((cell: Cell) => {
      return cell.id === target.dataset.id
        ? ({ ...cell, symbol: dataGame.player ? 'circle' : 'cross' } as Cell)
        : cell
    })
  )

  setDataGame({ player: !dataGame.player, matrix: newMatrix })
}

const handleTurn = (
  event: React.MouseEvent<HTMLElement>,
  dataGame: DataGame,
  setDataGame: SetDataGame
) => {
  let target = event.currentTarget

  const { value } = target.classList

  let isMarked = value.includes('cell_circle') || value.includes('cell_cross')

  if (isMarked) return

  handleDataGame(target, dataGame, setDataGame)
}

export { handleTurn, initDataGame }
