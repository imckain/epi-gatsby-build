import { Link } from 'gatsby';
import React from 'react';

import * as styles from './Header.module.scss';

function Header(props) {
    window.onscroll = function() {fixedHeader()};

    function fixedHeader() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById('header').style.width = '44%'; 
            document.getElementById('header').style.paddingLeft = '5%';
            document.getElementById('headerContent').style.transition = '0.1s';
        } else {
            document.getElementById('header').style.width = '100%'; 
            document.getElementById('header').style.paddingLeft = '0';
            document.getElementById('headerContent').style.transition = '0.8s';
        }
    }
    
    return (
        <header className={styles.Header} id='header'>
            <div className={styles.HeaderContent} id='headerContent'>
                <div className={styles.Logo} id='logo' />
                <nav>
                    <ul>
                        <li>
                            <Link activeClassName={styles.NavBarLinkActive} to="/">Home</Link>
                        </li>
                        <li>
                            <Link activeClassName={styles.NavBarLinkActive} to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link activeClassName={styles.NavBarLinkActive} to="/about">About</Link>
                        </li>
                        <li>
                            <Link activeClassName={styles.NavBarLinkActive} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;