import { Link } from 'wouter'
import { playAgain } from '../../utils/playAgain'
import type { SetDataGame } from '../../types/gameTypes'

function ModalWin({
  msg,
  setDataGame,
}: {
  msg: string
  setDataGame: SetDataGame
}) {
  return (
    <div className="modalWin">
      <div className="text-end modalWin__header">
        <Link href="/">
          <a className="close close_button">
            <span className="cross"></span>
          </a>
        </Link>
      </div>
      <div className="modalWin__body border-top border-bottom border-dark fs-4 text-center py-3 mt-2 mb-4">
        <p className="fw-bold my-0">{msg}</p>
      </div>
      <div className="modalWin__footer text-end">
        <button
          className="button button__text text-center border-dark fs-5"
          onClick={() => playAgain(setDataGame)}
        >
          <p className=" mb-0">Play again</p>
        </button>
      </div>
    </div>
  )
}

export default ModalWin
