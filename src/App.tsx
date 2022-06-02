import { Route, Switch } from 'wouter'
import Game from './pages/Game'
import Home from './pages/Home'

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/game" component={Game} />
    </Switch>
  )
}

export default App
