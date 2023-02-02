import React from 'react';
import styles from '../../sass/components/Portfolio-Parts/Header.module.scss';
import { SideLeft, SideRight, SideUp } from '../Wrappers/Animations';

function Header(){
    return (
        <header className={styles.header} id="top">
           <div className={styles.header__logo}></div>
           <section className={styles.header__content}>
               <SideLeft delay={0}><h1>Fuzzy</h1></SideLeft>
               <SideLeft delay={0.1}><h1 className="color-alt">Creations</h1></SideLeft>
               <SideLeft delay={0.2}><h2>I design and build user interfaces</h2></SideLeft>
               <SideUp delay={1.1}><h3>Web Developer <span className="color-alt">|</span> App Developer <span className="color-alt">|</span> UI/UX Designer</h3></SideUp>
           </section>
           <section className={styles.grid}>
                <SideLeft delay={0.3}><div className={`${styles.grid__item} ${styles.grid__item_1}`}></div></SideLeft>
                <SideRight delay={0.4}><div className={`${styles.grid__item} ${styles.grid__item_2}`}></div></SideRight>
                <SideLeft delay={0.5}><div className={`${styles.grid__item} ${styles.grid__item_3}`}></div></SideLeft>
                <SideRight delay={0.6}><div className={`${styles.grid__item} ${styles.grid__item_4}`}></div></SideRight>
           </section>
        </header>
    )
}

export default Header;