import React from "react";
import { Link } from 'gatsby';

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/contact">Contact Me</Link>
      <Link to="/">Home</Link>
    </div>
  )
}
