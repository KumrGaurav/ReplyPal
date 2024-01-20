import React, { useState } from "react";

import styles from "./Navbar.module.css";
import style from "./new.css"
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* <a className={styles.title} href="/">
        REPLYPAL
      </a> */}
      <div class="frame">
        <img src="image02.jpg" alt="REPLYPAL Logo"/>
      </div>

      
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#pricing">PRICING</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#contact_us">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
