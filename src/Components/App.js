import { Route } from 'react-router-dom';
import './app.scss';

import Home from './Home/Home';
import Navigation from './Navigation/Navigation'

function App() {
	return (
		<div className='App'>
			<header>
				<Navigation />
			</header>
			<main>
				<Route exact path='/' render={() => <Home />} />
			</main>
			
		</div>
	);
}

export default App;
