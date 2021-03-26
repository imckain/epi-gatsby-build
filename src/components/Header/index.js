import { Link } from 'gatsby';
import React from 'react';

import * as styles from './Header.module.scss';

const Header = (props) => (
    <header className={styles.Header}>
        <h1>{props.siteTitle}</h1>
        <nav>
            <ul>
                <li>
                    <Link activeClassName={styles.NavBarLinkActive} to="/">Home</Link>
                </li>
                <li>
                    <Link activeClassName='navBar_link--active' to="/projects">Projects</Link>
                </li>
                <li>
                    <Link activeClassName='navBar_link--active' to="/about">About</Link>
                </li>
                <li>
                    <Link activeClassName='navBar_link--active' to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;