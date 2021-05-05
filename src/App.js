import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
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
					<Route path="/home" component={Home} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
