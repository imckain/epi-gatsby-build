import React from 'react';
import { Link } from 'gatsby';

const About = (props) => (
    <div>
        <h1>About</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Laudantium repellendus autem quisquam cum nemo ipsam! 
            Laudantium quia amet adipisci porro harum quibusdam ab nam eligendi 
            officia vel? Iure, placeat dolorem.
        </p>
        <Link to="/contact">Contact Me</Link>
        <Link to="/">Home</Link>
    </div>
);

export default About;