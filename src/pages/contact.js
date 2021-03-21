import React from 'react';
import { Link } from 'gatsby';

const Contact = (props) => (
    <div>
        <h1>Contact</h1>
        <address>
            <p>email me: <a href="mailto:epi@epi.com">epi Contact</a></p>
        </address>
        <Link to="/about">Learn More</Link>
    </div>
)

export default Contact;