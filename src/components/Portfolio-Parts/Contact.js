import React from 'react';
import styles from '../../sass/components/Portfolio-Parts/Contact.module.scss';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';


function Contact(){
    return (
        <section className={styles.contact} id="contact">
            <h2 className={styles.contact__header}>Need a hand with anything?</h2>
            <div className={styles.contact__form}>
                <label className={styles.contact__form__label}>
                    <p>Your name</p>
                    <input className={styles.contact__form__input} type="text" name="name" />
                </label>
                <label className={styles.contact__form__label}>
                    <p>Your email</p>
                    <input className={styles.contact__form__input} type="text" email="email" />
                </label>
                <label className={styles.contact__form__label}>
                    <p>Your message</p>
                    <textarea className={`${styles.contact__form__input} ${styles.contact__form__input__area}`} type="text" message="message"></textarea>
                </label>
                <button className={`${styles.contact__form__button} main-button`}>Send</button>
            </div>
            <div className={styles.contact__info}>
                    <div className={styles.contact__info__quote}>
                        <p className={styles.contact__info__quote__text}>
                            "We have used Ed for many years, he has delivered outstanding results in all areas of development, design and marketing.
                            In our first time working with him he had the foresight to see the value in an abandoned project which would go on
                            to generate millions of views. His recent work breathed life into an old tech project delivering a quirky and functional
                            take, incorporating new ideas and advanced code that borders on the fringes of what was possible in a basic React application."
                        </p>
                        <div className={styles.contact__info__profile}>
                            <div className={styles.contact__info__profile__image}></div>
                            <p className={styles.contact__info__profile__name}>Thomas Jeffs</p>
                            <p className={`${styles.contact__info__profile__title} color-alt`}>Founder - Luciica</p>
                        </div>
                    </div>
                    <div className={`socials`}>  
                        <a target="_blank" href="//www.instagram.com/create.fuzzy"><AiOutlineInstagram /></a>
                        <a target="_blank" href="//www.github.com/fuzzyrubrubs/"><AiOutlineGithub /></a>
                    </div>
            </div>
        </section>
    )
}

export default Contact;