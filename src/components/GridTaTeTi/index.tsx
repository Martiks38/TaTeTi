import { handleTurn } from '../../utils/gameData'
import type { Cell, DataGame } from '../../interface/cell'
import type { SetDataGame } from '../../types/gameTypes'

function GridTaTeTi({
  dataGame,
  setDataGame,
}: {
  dataGame: DataGame
  setDataGame: SetDataGame
}) {
  return (
    <table className="gridGame m-auto">
      <caption className="caption-top fs-2 text-center mb-5">
        {`Turn: Player ${dataGame.player ? 1 : 2}`}
      </caption>
      <tbody>
        {dataGame.matrix.map((row, index) => (
          <tr key={index}>
            {row.map((cell: Cell) => (
              <td
                key={cell.id}
                data-id={cell.id}
                className={
                  cell.symbol === undefined
                    ? 'cell'
                    : cell.symbol === 'circle'
                    ? 'cell cell_circle'
                    : 'cell cell_cross'
                }
                onClick={(event) => handleTurn(event, dataGame, setDataGame)}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GridTaTeTi
