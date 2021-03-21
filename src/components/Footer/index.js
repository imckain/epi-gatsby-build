import React from 'react';
import * as styles from './Footer.module.scss';

const Footer = (props) => (
    <footer className={styles.Footer}>
        <p>
            Copyright &copy; All Rights Reserved
            {' '}{new Date().getFullYear()} EPI
        </p>
    </footer>
);

export default Footer;