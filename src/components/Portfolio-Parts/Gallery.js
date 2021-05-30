import React, { useContext } from 'react';
import styles from '../../sass/components/Portfolio-Parts/Gallery.module.scss'; 
import Gallery_item from './Gallery_item';
import { PortfolioContext } from '../../contexts/Portfolio.context';

function Gallery(){
    const { Projects } = useContext(PortfolioContext);

    console.log(Projects)

    return (
        <section className={styles.gallery} id="portfolio">
            <h2>Portfolio</h2>
            <div className={styles.gallery__portfolio}>
                {Projects.map(project => <Gallery_item project={project} />)}
            </div>
            <p></p>
        </section>
    )
}

export default Gallery;