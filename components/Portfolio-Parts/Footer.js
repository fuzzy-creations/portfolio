import React, { useContext } from 'react';
import styles from '../../sass/components/Portfolio-Parts/Footer.module.scss';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import { Column, ColumnSpaced, Row, RowSpaced } from '../Global';
import { PortfolioContext } from '../../contexts/Portfolio.context';
import { Link } from 'react-router-dom';

function Footer(){
    const { Projects } = useContext(PortfolioContext);

    return (
        <footer className={styles.footer}>
            <section className={styles.container}>
                <ColumnSpaced>
                    <div className={styles.logo}></div>
                    <Column>
                        <h4>Fuzzy</h4>
                        <h4 className="color-alt">Creations</h4>
                    </Column>
                    <Row>
                        <div className={`socials`}>  
                            <a target="_blank" href="//www.instagram.com/create.fuzzy"><AiOutlineInstagram /></a>
                            <a target="_blank" href="//github.com/fuzzy-creations?tab=repositories/"><AiOutlineGithub /></a>
                        </div>
                    </Row>
                </ColumnSpaced>
                <Column gap={3}>
                    <h5>- Menu</h5>
                    <Column gap={2}>
                        <a href='#top'><p>Expertise</p></a>
                        <a href='#portfolio'><p>Portfolio</p></a>
                        <a href='#testimonial'><p>Testimonial</p></a>
                    </Column>
                </Column>
                <Column gap={3}>
                    <h5>- Latest Projects</h5>
                    <Column gap={2}>
                        {Projects.slice(0, 2).map(item => (
                            <Link to={`/project/${item.url}`} className={styles.project}>
                                <div className={styles.project__image} style={{"backgroundImage": `url(${item.featured})`}}></div>
                                <Column>
                                    <p>{item.name}</p>
                                    <small>{item.tech}</small>
                                </Column>
                            </Link>
                        ))}
                    </Column>
                </Column>

            </section>
            
            <RowSpaced marginTop={10}>
                <small>© 2023 Fuzzy Creations</small>
                <a href="#top"><small>Back to top</small></a>
            </RowSpaced>

        </footer>
    )
}

export default Footer;