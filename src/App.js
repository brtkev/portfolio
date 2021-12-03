import styles from './App.module.css'
import Navegation from './components/navegation';
import Home from './components/home';

const App = () => {

	return (
		<div>
			
			<Navegation />
			<Home></Home>
			{/* <h1 className={styles.container} id={'services'} >Hello World!</h1> */}

		</div>
	);
}



export default App;