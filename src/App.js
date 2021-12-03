import styles from './App.module.css'
import Navegation from './components/navegation';

import { useState, useEffect } from 'react';

const App = () => {

	return (
		<div>
			
			<Navegation />
			<h1 className={styles.container} id={'services'} >Hello World!</h1>

		</div>
	);
}



export default App;