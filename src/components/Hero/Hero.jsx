import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { getVideoUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* <h1 className={styles.title}>Hi, I'm Ada</h1> */}
        <p className={styles.description}>
          AUTOMATE CUSTOM EMAIL REPLIES AT THE TOUCH OF A BUTTON
        </p>
        <a href="mailto:kgaurav852201@email.com" className={styles.contactBtn}>
          Get Started For Free!
        </a>
      </div>
      <iframe
        title="ReplyPal video"
        width="560"
        height="315"
        src="video01.mp4"
        frameborder="0"
        allowfullscreen
        className={styles.heroVideo}
      ></iframe>
    </section>
  );
};
