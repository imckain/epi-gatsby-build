import React from 'react';
import { Link } from 'gatsby';

const NotFound = (props) => (
    <div>
        <h1>404 Sorry not found</h1>
        <Link to='/'>Home</Link>
    </div>
);

export default NotFound;