import styles from './index.module.css';

import project1 from '../../../public/assets/projects/start-page.png';
import project2 from '../../../public/assets/projects/google-clone.png';
import project3 from '../../../public/assets/projects/menu-dropdown.png';
import project4 from '../../../public/assets/projects/fiber-page.png';

import {useEffect, useState} from 'react';


const useSliderIndex = (initialValue ) => {

    const [sliderIndex, setSliderIndex] = useState(initialValue);
    let imagesArray = undefined;

    useEffect( () => {
        if(imagesArray === undefined) imagesArray = [...document.getElementsByClassName(styles.slideImage)];
        imagesArray[sliderIndex].classList.add(styles.active);
    }, [sliderIndex])

    const setNewValue = (value) => {
        setSliderIndex((prevState) => {
            imagesArray[prevState].classList.remove(styles.active);
            if (prevState + value >= imagesArray.length ) return 0;
            else if(prevState + value < 0) return imagesArray.length -1;
            else return prevState + value;
        })
    }
    return [sliderIndex, setNewValue];
}

export default function Home(props) {
    let sliderIndex, setSliderIndex;
    [sliderIndex, setSliderIndex] = useSliderIndex(0);
    // useEffect(() => {
    //     // document.querySelector(`.${styles.slideImage}`).classList.add(styles.active)
    // }, [])


    const buttonHandle = (ev) => {
        setSliderIndex(ev.target.dataset.buttonRight == 'true' ? 1 : -1);
    }
    
    return (
        <div className={styles.container} >
            <div className={styles.slideContainer} >
            <button onClick={buttonHandle} className={styles.button} data-button-left >&#10232;</button>
                <img className={styles.slideImage} src={project1} alt="start page" />
                <img className={styles.slideImage} src={project2} alt="start page" />
                <img className={styles.slideImage} src={project3} alt="start page" />
                <img className={styles.slideImage} src={project4} alt="start page" />
            <button onClick={buttonHandle} className={styles.button} data-button-right >&#10233;</button>
            </div>
        </div>
    )
};
