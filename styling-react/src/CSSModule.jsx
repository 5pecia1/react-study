import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            Hi, <span className="something">CSS Module!</span>
        </div>
    )
}

export default CSSModule;