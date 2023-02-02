import React from 'react';
import styles from '../sass/components/Menu.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';

interface Props {
  state: boolean;
  toggle: (state: boolean) => void;
}

const Menu: React.FC<Props> = (props) => {
  return (
    <section className={styles.menu}>
      <div className={styles.menu__filler}>
        <div className={styles.menu__filler__image}></div>
      </div>     
      <div className={styles.menu__details}>
        <div className={styles.menu__details__contact}>
          <div><span className={styles.menu__details__contact__icon}><FiMail /></span><p>edwardbuckham@gmail.com</p></div>
          <div><span className={styles.menu__details__contact__icon}><GoLocation /></span><p>Greenwich, London, UK</p></div>
          <div><span className={styles.menu__details__contact__icon}><BsPhone /></span><p>+44 7413 985 624</p></div>
        </div>
        <div className={`${styles.menu__details__social} socials`}>  
          <a target="_blank" href="//linkedin.com/in/edward-buckham/"><IoLogoLinkedin /></a>
          <a target="_blank" href="//github.com/fuzzy-creations?tab=repositories"><AiOutlineGithub /></a>
        </div>
      </div>     
      <div className={styles.menu__options}>
        <a href="#expertise"><h2 onClick={() => { props.toggle(!props.state) }}>Expertise</h2></a>    
        <a href="#portfolio"><h2 onClick={() => { props.toggle(!props.state) }}>Portfolio</h2></a>    
        <a href="#testimonial"><h2 onClick={() => { props.toggle(!props.state) }}>Testimonial</h2></a>    
      </div>     
    </section>
  );
};

export default Menu;