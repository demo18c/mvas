import './App.css';
import { Route, Switch } from 'wouter';

import Scene from './Scene';
import Home from './Home';
import Header from './Header';
import About from './About';
function App() {
	return (
		<>
			<Header />
			<div className="App">
				<Scene />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/About">
						<About />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default App;
