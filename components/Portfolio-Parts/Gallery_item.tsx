import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../sass/components/Portfolio-Parts/Gallery_item.module.scss';

interface GalleryProps {
  project: {
    url: string;
    featured: string;
    name: string;
  };
}

const GalleryItem: React.FC<GalleryProps> = (props) => {
  return (
    <Link to={`/project/${props.project.url}`} className={styles.project}>
      <div className={`${styles.project__side} ${styles.project__side__front}`}
           style={{backgroundImage: `url(${props.project.featured})`}}>

      </div>
      <div className={`${styles.project__side} ${styles.project__side__back}`}>
        {props.project.name}
      </div>
    </Link>
  );
};

export default GalleryItem;