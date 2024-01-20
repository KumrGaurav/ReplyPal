import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>ReplyPal, LLC</h2>
        <p>Tampa, FL 33605</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="#home">HOME</a>
          </li>
          <li className={styles.link}>
            <a href="#pricing">PRICING</a>
          </li>
          <li className={styles.link}>
            
            <a href="#contact us">CONTACT US</a>
          </li>
          
        </ul>
        <a className={styles.t}>©2024 ReplyPal. All rights reserved.</a>
      </div>
      
      
    </footer>
  );
};
