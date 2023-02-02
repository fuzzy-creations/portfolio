import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../sass/components/Project.module.scss';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';
import { Column, Row, RowSpaced } from './Global';
import Footer from './Portfolio-Parts/Footer';
import { Project } from '../projects/Projects';

interface ProjectProps {
    project: Project;
  }

const ProjectP: React.FC<ProjectProps> = (props) => {
    const data = props.project;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <>
        <main className={styles.project}>
            <RowSpaced>
                <div className={styles.logo}></div>
                <p className={styles.back}><Link to="/">Back</Link></p>
            </RowSpaced>

            <section>
                <section className={styles.header}>
                    <Column gap={3}>
                        <Column>
                            <h2>{data.name}</h2>
                            <small>{data.company}</small>
                        </Column>
                        <Column>
                            <Row gap={1}><span className={styles.icon}><FaTools /></span><p>{data.tech}</p></Row>
                            <Row gap={1}><span className={styles.icon}><AiOutlineSetting /></span><p>{data.role}</p></Row>
                        </Column>
                        <Row>
                            <a target="_blank" href={data.external} className={`${styles.action} main-button`}>See full project</a>
                            <a target="_blank" href={data.github} className={`${styles.action} main-button`}>View on Github</a>
                        </Row>
                    </Column>
                    <div className={styles.featured}><img src={data.featured} /></div>
                </section>

            </section>

            <section className={styles.details}>
                    {data.concept && <Column gap={1}>
                        <h5>- Concept</h5>
                        <p>{data.concept}</p>
                    </Column>}
                    {data.technical && <Column gap={1}>
                        <h5>- Technical</h5>
                        <p>{data.technical}</p>
                    </Column>}
                    {data.challenges && <Column gap={1}>
                        <h5>- Challenges</h5>
                        <p>{data.challenges}</p>
                    </Column>}
                    {data.conclussion && <Column gap={1}>
                        <h5>- Conclusion</h5>
                        <p>{data.conclussion}</p>
                    </Column>}
                    {data.login && <Column gap={1}>
                        <h5>- Login Details</h5>
                        <Column gap={1}>
                            <p>Username: {data.login[0]}</p>
                            <p>Password: {data.login[1]}</p>
                        </Column>
                    </Column>}
            </section>






            <section className={styles.images}>
                <h5>- Gallery</h5>
                <div className={styles.gallery}>
                    {data.gallery.map(item => <div onClick={() => window.open(item)} className={styles.gallery__item}><img src={item} /></div>)}
                </div>
            </section>


            { data.testimonial && (
                <section className={styles.testimonial} id="contact">
                    <h5>- Testimonial</h5>
                    <h3>"{data.testimonial.content}"</h3>
                    <div className={styles.column}>
                        <div className={styles.avatar}></div>
                        <p>{data.testimonial.person}</p>
                        <small className={`color-alt`}>{data.testimonial.position}</small>
                    </div>
                </section>
            ) }

        </main>
        <Footer />
        </>
    )
}


export default ProjectP;