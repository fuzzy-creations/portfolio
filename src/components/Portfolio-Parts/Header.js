import React from 'react';
import styles from '../../sass/components/Portfolio-Parts/Header.module.scss';

function Header(){
    return (
        <header className={styles.header} id="top">
           <div className={styles.header__logo}></div>
           <div className={styles.header__content}>
               <h1>Fuzzy</h1>
               <h1 className="color-alt">Creations</h1>
               <h2>I design and build user interfaces</h2>
               <h3>Front End Developer <span className="color-alt">|</span> Web Developer <span className="color-alt">|</span> WordPress</h3>
           </div>
        </header>
    )
}

export default Header;