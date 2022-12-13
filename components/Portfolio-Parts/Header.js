import React from 'react';
import styles from '../../sass/components/Portfolio-Parts/Header.module.scss';

function Header(){
    return (
        <header className={styles.header} id="top">
           <div className={styles.header__logo}></div>
           <section className={styles.header__content}>
               <h1>Fuzzy</h1>
               <h1 className="color-alt">Creations</h1>
               <h2>I design and build user interfaces</h2>
               <h3>Web Developer <span className="color-alt">|</span> App Developer <span className="color-alt">|</span> UI/UX Designer</h3>
           </section>
           <section className={styles.grid}>
                <div className={`${styles.grid__item} ${styles.grid__item_1}`}></div>
                <div className={`${styles.grid__item} ${styles.grid__item_2}`}></div>
                <div className={`${styles.grid__item} ${styles.grid__item_3}`}></div>
                <div className={`${styles.grid__item} ${styles.grid__item_4}`}></div>
           </section>
        </header>
    )
}

export default Header;