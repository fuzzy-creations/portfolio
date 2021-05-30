import React from 'react';
import styles from '../../sass/components/Portfolio-Parts/Footer.module.scss';

function Footer(){
    return (
        <footer className={styles.footer}>
            <p>© 2021 Fuzzy Creations</p>
            <a href="#top"><p>Back to top</p></a>
        </footer>
    )
}

export default Footer;