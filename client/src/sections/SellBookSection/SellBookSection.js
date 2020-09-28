import React from 'react';
import ButtonsComponent from './ButtonsComponent';
import styles from './SellBookSection.module.css';
import { pylLink, imgAlt, pylCopyHeader, pylCopyDesc } from './constants';
import QuantitySelector from './QuantitySelector';

const SellBookSection = () => (
    <div className={ `${styles.container}` }>
        <h1 className={ `${styles.header} ${styles.headerTop}` }>{ pylCopyHeader }</h1>
        <img className={ styles.bookCover } src={ pylLink } alt={ imgAlt } />
        <div className={styles.contentButtonWrapper}>
            <h1 className={ `${styles.header} ${styles.headerBottom}`}>{ pylCopyHeader }</h1>
            <p className={ styles.pylCopyDesc }>{ pylCopyDesc }</p>
            <ButtonsComponent />
        </div>
    </div>
);

export default SellBookSection;
