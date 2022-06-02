export interface DataGame {
  player: boolean
  matrix: Cell[][]
}

export interface Cell {
  symbol: undefined | 'circle' | 'cross'
  id: string
}
