import styles from './App.module.css'

import Navegation from './components/navegation';

const App = () => {
	return (
		<div>
			<Navegation activeButton={'Services'} />
			<h1 className={styles.container} >Hello World!</h1>
		</div>
	);
}



export default App;