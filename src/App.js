import styles from './App.module.css'
import Navegation from './components/navegation';
import Home from './components/home';
import About from './components/about';
import Galery from './components/galery';

const App = () => {

	return (
		<div>
			
			<Navegation />
			<About />
			<Home />
			<Galery />
		</div>
	);
}



export default App;