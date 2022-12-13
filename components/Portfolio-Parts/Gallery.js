import React, { useContext } from 'react';
import styles from '../../sass/components/Portfolio-Parts/Gallery.module.scss'; 
import Gallery_item from './Gallery_item';
import { PortfolioContext } from '../../contexts/Portfolio.context';
import { Column } from '../Global';

function Gallery(){
    const { Projects } = useContext(PortfolioContext);

    console.log(Projects)

    return (
        <section className={styles.gallery} id="portfolio">
            <Column centerText={true} gap={1}>
                <h5>- Portfolio</h5>
                <h2>Commercial and Enterprise</h2>
            </Column>
            <div className={styles.gallery__portfolio}>
                {Projects.map(project => <Gallery_item project={project} />)}
            </div>
            <p></p>
        </section>
    )
}

export default Gallery;