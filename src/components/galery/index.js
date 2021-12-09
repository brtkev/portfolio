import styles from './index.module.css'

export default function Galery(props) {
    
    return (
        <div className={styles.container} >
            <h2>lastest projects</h2>
            <div className={styles.grid} >
                <div className={styles.gridItem} ></div>
                <div className={styles.gridItem} ></div>
                <div className={styles.gridItem} ></div>
                <div className={styles.gridItem} ></div>
                <div className={styles.gridItem} ></div>
            </div>
        </div>
    )
};
