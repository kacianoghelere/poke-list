import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

import Generation from './pages/Generation'
import Generations from './pages/Generations'
import NotFound from './pages/NotFound'
import Pokemon from './pages/Pokemon'
import './App.scss'

const App = () => (
  <Router>
    <Switch>
      <Route
        component={Generations}
        exact
        path="/"
      />
      <Route
        component={NotFound}
        exact
        path="/not-found"
      />
      <Route
        component={Generation}
        path="/generation/:generationName"
      />
      <Route
        component={Pokemon}
        path="/pokemon/:pokemonName"
      />
    </Switch>
  </Router>
)

export default App
