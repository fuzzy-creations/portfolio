import React, { useState } from 'react';

import Header from './Portfolio-Parts/Header';
import Introduction from './Portfolio-Parts/Introduction';
import Gallery from './Portfolio-Parts/Gallery';
import Contact from './Portfolio-Parts/Contact';
import Footer from './Portfolio-Parts/Footer';

import Menu from './Menu';
import Nav_icon from './Nav_icon';

interface Props {
    set_show_menu: (show_menu: boolean) => void;
    state: boolean;
}
    
const Portfolio: React.FC = () => {
    const [show_menu, set_show_menu] = useState(false);

    return (
    <>
        <Nav_icon toggle={set_show_menu} state={show_menu} />
        <div className={show_menu ? 'main-show' : 'main-hide'}>
            <Menu toggle={set_show_menu} state={show_menu} />
        </div>
        <div className={show_menu ? 'main-hide' : 'main-show'}>
            <Header />
            <Introduction />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    </>
    );
    };
    
    export default Portfolio;