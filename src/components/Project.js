import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../sass/components/Project.module.scss';

import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';

function Project(props){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const imageSections = props.project.all_images.sections;

    const sections_formatted = imageSections.map(section => {
        const number_of_images = section.images.length;
        const print_images = section.images.map(image => <img src={image} />)
        var style_type;
        switch(number_of_images){
            case 2:
                style_type = styles.project__sections__item__content__2;
                break;
            case 4: 
                style_type = styles.project__sections__item__content__4
                break;
            default: 
                style_type = null
        }
        return (
            <div className={styles.project__sections__item}>
                <h2 className={styles.project__sections__item__title}>
                    {section.title}
                </h2>
                <div className={`${styles.project__sections__item__content} ${style_type}`}>
                    {print_images}
                </div>
            </div>
        )
    })

    const testimonial = props.project.testimonial && props.project.testimonial.content ? (
        <section className={styles.project__testimonial}>
            <p className={styles.project__testimonial__content}>
                "{props.project.testimonial.content}"
            </p>
            <p className={styles.project__testimonial__person}> 
            - {props.project.testimonial.person}, {props.project.testimonial.position}
            </p>
        </section>
    ) : null;

    return (
        <main className={styles.project}>
            <header className={styles.project__header}>
                <div className={styles.project__header__logo}></div>
                <p className={styles.project__header__back}><Link to="/">Back</Link></p>
                <div className={styles.project__header__content}>
                    <h2>{props.project.name}</h2>
                    <p>{props.project.content}</p>
                    <div>
                        <p className={styles.project__header__content__text}><span><AiOutlineUser /></span>{props.project.company}</p>
                        <p className={styles.project__header__content__text}><span><FaTools /></span>{props.project.software}</p>
                        <p className={styles.project__header__content__text}><span><AiOutlineSetting /></span>{props.project.job}</p>
                    </div>
                    <a target="_blank" href={props.project.full_project} className={`${styles.project__header__button} main-button`}>See full project</a>
                </div>
                <div className={styles.project__header__image}>
                    <img src={props.project.all_images.featured} />
                </div>
            </header>
            {testimonial}
            <section className={styles.project__sections}>
                {sections_formatted}
            </section>
        </main>
    )
}


export default Project;