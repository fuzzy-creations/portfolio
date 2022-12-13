import React from 'react';
import styles from '../../sass/components/Portfolio-Parts/Introduction.module.scss';
import { VscCode, VscTerminalCmd, VscVmActive, VscGraph, VscAccount } from "react-icons/vsc";
import { Column } from '../Global';

function Introduction(){
    return (
        <section className={styles.intro} id="expertise">
            <Column gap={1}>
                <h5>- Introduction</h5>
                <p>A creative, dedicated software developer, thinker and innovator working from London. Specialised in ReactJS and React Native with a particular interest in technology products that utilize effective, simple and reuseable code, I seek innovative approaches to deliver web-based solutions.</p>
            </Column>
            <div className={styles.icon}><VscAccount /></div>
            <Column gap={1}>
                <h5>- Front-end development </h5>
                <p>Vanilla HTML, JSX, CSS, JS, TS, PHP, React, React Native, GraphQL, WordPress, Git, I have worked as the technical lead, programmed, and designed highly scalable systems that can handle millions of events and implented visually precise, innovative and clean web-based solutions.</p>
            </Column>
            <div className={styles.icon}><VscCode /></div>
            <Column gap={1}>
                <h5>- Back-end devlopement</h5>
                <p>Node, MongoDB, Express, MySQL, Firebase, AWS, good front-end architecture starts with the database and I have commercial experience using cloud based back-ends to build and deliver creative, clean and dynamic solutions which compliment and simplify complex front-end needs.</p>
            </Column>
            <div className={styles.icon}><VscTerminalCmd /></div>
            <Column gap={1}>
                <h5>- UI/UX Design </h5>
                <p>With a particular interest in hypermodern designs and working at the intersection of development and brand design, I leverage all modern screen design tools to tailor custom effective solutions fit for any requirement.</p>
            </Column>
            <div className={styles.icon}><VscVmActive /></div>
            <Column gap={1}>
                <h5>- SEO / Optimisation</h5>
                <p>Experienced in utilizing digital marketing skills to deliver efficent SEO practices and have first hand experience reaching the top spot on Google under competitive searches.</p>
            </Column>
            <div className={styles.icon}><VscGraph /></div>
        </section>
    )
}

export default Introduction;