import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h6 className={styles.title}>Our mission is to automate your email experience with a personalized touch </h6>
        <p className={styles.title1}>
          Effortlessly generate tailored replies by analyzing incoming emails with a single click. expereince the power of ReplyPal for FREE. your ultimate email efficiency tool!
        </p>
    </section>
  );
};
