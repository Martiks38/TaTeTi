import { initDataGame } from './gameData'
import type { SetDataGame } from '../types/gameTypes'

export function playAgain(setDataGame: SetDataGame) {
  setDataGame(initDataGame)
}
