import React from 'react';

const Footer = (props) => (
    <footer>
        <p>&copy; copyright</p>
        {' '}{new Date().getFullYear()} EPI
    </footer>
);

export default Footer;