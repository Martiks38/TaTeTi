import Nav from 'react-bootstrap/Nav'

function Home() {
  return (
    <div
      style={{ height: '100vh' }}
      className="d-flex flex-column justify-content-center align-items-center "
    >
      <div>
        <h1 className="text-center mb-5 fs-1 text-light">Ta Te Ti</h1>
        <Nav.Link className="buttonPlay text-center text-dark" href="/game">
          Jugar
        </Nav.Link>
      </div>
    </div>
  )
}

export default Home
