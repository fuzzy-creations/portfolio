import React from 'react';
import styles from '../../sass/components/Portfolio-Parts/Introduction.module.scss';

function Introduction(){
    return (
        <section className={styles.intro} id="expertise">
            <div className={styles.intro__content}>
                <div className={`main-title`}>- Introduction</div>
                <h2>Hey! I'm Edd</h2>
                <p>A creative, dedicated web developer, thinker and innovator working from London. Experienced in utilizing a background in digital marketing to develop web-based solutions, delivering best SEO practices.</p>
                <p>With a particular interest in effective simplicity, I seek innovative approaches to coding challenges.</p>
                <p>Working at the intersection of development and marketing/brand, I create beautiful, SEO optimized web apps fit for any requirement.</p>
                <p>Need help with a project? hit me up!</p>
            </div>
            <div className={styles.intro__content}>
                <div className={styles.intro__item}>
                    <div className={`main-title`}>- Fields of expertise</div>
                    <p>WordPress <span className={`color-alt`}>|</span> HTML5 <span className={`color-alt`}>|</span>  CSS3/SASS  <span className={`color-alt`}>|</span>  ReactJS  <span className={`color-alt`}>|</span>  React Native  <span className={`color-alt`}>|</span> JavaScript  <span className={`color-alt`}>|</span> NodeJS <span className={`color-alt`}>|</span> MySQL <span className={`color-alt`}>|</span>  TypeScript</p>
                </div>
                <div className={styles.intro__item}>
                    <div className={`main-title`}>- Software I work with</div>
                    <p>Firebase <span className={`color-alt`}>|</span> MongoDB <span className={`color-alt`}>|</span> Express <span className={`color-alt`}>|</span>  Adobe XD  <span className={`color-alt`}>|</span>  Git  </p>
                </div>
            </div>
        </section>
    )
}

export default Introduction;