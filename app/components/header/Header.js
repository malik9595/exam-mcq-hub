import Link from "next/link";
import React from "react";
import './header.modules.css'
const Header = () => {
  return (
    <nav className="headerContainer">
      <span className="logo">McqPratice</span>

      <Link href="upsc">
        <span className="navLink">UPSCC</span>
      </Link>
      <Link href="upsc">
        <span className="navLink">SSC</span>
      </Link>
      <Link href="upsc">
        <span className="navLink">Banking</span>
      </Link>

      <span className="loginBtn">Login</span>
    </nav>
   
  );
};

export default Header;
