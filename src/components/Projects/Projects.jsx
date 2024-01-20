import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <div>
      <button className={styles.cardButton}>
        <p className={styles.text2}>Try ReplyPal For Free!</p>
      </button>
      </div>
    </section>
    
  );
};
