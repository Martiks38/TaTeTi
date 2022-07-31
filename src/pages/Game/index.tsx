import { useState } from 'react'
import GridTaTeTi from '../../components/GridTaTeTi'
import ModalWin from '../../components/ModalWin'
import { initDataGame } from '../../utils/gameData'
import { msgWinner } from '../../utils/win'
import type { DataGame } from '../../interface/cell'

function Game() {
  const [dataGame, setDataGame] = useState<DataGame>(() => initDataGame())

  let result = msgWinner(dataGame)

  return (
    <div className="center">
      <GridTaTeTi dataGame={dataGame} setDataGame={setDataGame} />
      {result?.end && <ModalWin msg={result.msg} setDataGame={setDataGame} />}
    </div>
  )
}

export default Game
