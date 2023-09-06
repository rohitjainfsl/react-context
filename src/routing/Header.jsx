import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1><Link to="/">React Routing</Link></h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
