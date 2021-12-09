import styles from './index.module.css';
import { projects } from '../images';

import {useEffect, useState} from 'react';

const imageSliders = [];
for (let name in projects){
    imageSliders.push(<img className={styles.slideImage} src={projects[name]} alt={name}  key={name}  />)
}

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
    let [sliderIndex, setSliderIndex] = useSliderIndex(0);

    useEffect(() => setInterval(() => setSliderIndex(1), 3000), [])

    const buttonHandle = (ev) => setSliderIndex(ev.target.dataset.buttonRight == 'true' ? 1 : -1);
    
    return (
        <div className={styles.container} >

            <div className={styles.slideContainer} >
                {imageSliders}
                <button onClick={buttonHandle} className={styles.button} data-button-left >&#10232;</button>
                <button onClick={buttonHandle} className={styles.button} data-button-right >&#10233;</button>
            </div>
        </div>
    )
};
