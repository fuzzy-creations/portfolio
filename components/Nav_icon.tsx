import React, { useState } from 'react';
import styles from '../sass/components/Nav_icon.module.scss';

interface Nav_iconProps {
    state: boolean;
    toggle: (newState: boolean) => void;
}

const Nav_icon: React.FC<Nav_iconProps> = (props) => {
    return (
        <div className={`${styles.nav__icon} ${props.state ? styles.open : null}`} onClick={() => { props.toggle(!props.state) }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Nav_icon;