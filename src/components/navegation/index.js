import styles from './index.module.css'

import { useEffect } from 'react';

export default function Navegation({activeButton}) {

    useEffect(()=> {
        let lis = document.getElementsByClassName(styles.li);
        for (let i = 0; i < lis.length; i++) {
            let li = lis.item(i);
            if (li.firstChild.textContent === activeButton){
                li.classList.add(styles.active);
            }else{
                li.classList.remove(styles.active);

            }
        }
    }, [activeButton])

    return(
        <nav className={styles.container} >
            <ul className={styles.ul} >
                <li className={`${styles.li} ${styles.active}`} >
                    <a className={styles.link} href="#">Home</a>
                </li>
                <li className={styles.li} >
                    <a className={styles.link} href="#">Services</a>
                </li>
                <li className={styles.li} >
                    <a className={styles.link} href="#">Locations</a>
                </li>
                <li className={styles.li} >
                    <a className={styles.link} href="#">About</a>
                </li>
                <li className={styles.li} >
                    <a className={styles.link} href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
};
