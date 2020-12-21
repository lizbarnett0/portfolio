import { Route } from 'react-router-dom';
import './app.scss';

import Home from './Home/Home';

function App() {
	return (
		<div className='App'>
			<main>
				<Route exact path='/' render={() => <Home />} />
			</main>
			
		</div>
	);
}

export default App;
