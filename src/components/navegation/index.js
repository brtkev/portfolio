import styles from './index.module.css'

import { useEffect, useState } from 'react';

export default function Navegation() {
	let [activeHash, setActiveHash] = useState(window.location.hash);
    useEffect(()=> {
        let lis = document.getElementsByClassName(styles.li);
        for (let i = 0; i < lis.length; i++) {
            let li = lis.item(i);
            if (li.firstChild.hash === activeHash){
                li.classList.add(styles.active);
            }else{
                li.classList.remove(styles.active);

            }
        }
    }, [activeHash])

    const hashLinkHandle = (ev) => {
        setActiveHash(ev.target.hash)
        return ev
    }

    const NavLi = ({name}) => 
        <li className={styles.li} >
            <a className={styles.link} onClick={hashLinkHandle} href={`#${name}`}>
                {name.replace(/^\w/, (c) => c.toUpperCase())} {/* capitalize */}
            </a>
        </li>;

    return(
        <nav className={styles.container} >
            <ul className={styles.ul} >
                <NavLi name="home" />
                <NavLi name="services" />
                <NavLi name="locations" />
                <NavLi name="about" />
                <NavLi name="contact" />
            </ul>
        </nav>
    );
};



 

