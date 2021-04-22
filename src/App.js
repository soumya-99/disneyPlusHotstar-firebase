import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Login from "./components/Login"
import Navigation from "./components/Navigation"

function App() {
	return (
		<div className="App">
			<Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>

		</div>
	)
}

export default App
