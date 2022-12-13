import React from 'react';
import styles from '../../sass/components/Portfolio-Parts/Contact.module.scss';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';


function Contact(){
    return (
        <section className={styles.contact} id="testimonial">
                <h5>- Testimonial</h5>
                <h3>
                    "We have used Ed for many years, he has delivered outstanding results in all areas of development, design and marketing.
                    In our first time working with him he had the foresight to see the value in an abandoned project which would go on
                    to generate millions of views. His recent work breathed life into an old tech project delivering a quirky and functional
                    take, incorporating new ideas and advanced code that borders on the fringes of what was possible in a basic React application."
                </h3>
                <div className={styles.column}>
                    <div className={styles.avatar}></div>
                    <p>Thomas Jeffs</p>
                    <small className={`color-alt`}>Founder, Lucidica</small>
                </div>
        </section>
    )
}

export default Contact;

{/* <div className={`socials`}>  
<a target="_blank" href="//www.instagram.com/create.fuzzy"><AiOutlineInstagram /></a>
<a target="_blank" href="//github.com/fuzzy-creations?tab=repositories/"><AiOutlineGithub /></a>
</div> */}