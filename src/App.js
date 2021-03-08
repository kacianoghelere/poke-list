import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css'

import Generation from './pages/Generation'
import Generations from './pages/Generations'
import NotFound from './pages/NotFound'
import Pokemon from './pages/Pokemon'
import './App.scss'
import './assets/fonts/Pokemon Hollow.ttf'
import './assets/fonts/Pokemon Solid.ttf'

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
        component={Pokemon}
        exact
        path="/generation/:generationName/pokemon/:pokemonName"
      />
      <Route
        component={Generation}
        exact
        path="/generation/:generationName"
      />
    </Switch>
  </Router>
)

export default App
