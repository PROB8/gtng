import React from 'react';
import styles from './SellBookSection.module.css';
import { pylLink, imgAlt, payButtonImgAlt, pylCopyHeader, pylCopyDesc } from './constants';

const SellBookSection = () => (
    <div className={ `${styles.container}` }>
        <h1 className={ `${styles.header} ${styles.headerTop}` }>{ pylCopyHeader }</h1>
        <img className={ styles.bookCover } src={ pylLink } alt={ imgAlt } />
        <div className={styles.contentButtonWrapper}>
            <h1 className={ `${styles.header} ${styles.headerBottom}`}>{ pylCopyHeader }</h1>
            <p className={ styles.pylCopyDesc }>{ pylCopyDesc }</p>
            <form action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="XSGJD58UA72EQ" />
                <input className={ styles.buttonForm }
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                    border="0"
                    name="submit"
                    alt={ payButtonImgAlt } />
            </form>
        </div>
    </div>
);
export default SellBookSection;