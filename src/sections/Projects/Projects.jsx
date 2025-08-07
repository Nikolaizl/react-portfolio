import React from "react";
import styles from "./ProjectsStyles.module.css";
import funrun from "../../assets/funrun.png";
import freshcut from "../../assets/freshcut.png";
import good2eat from "../../assets/good2eat.png";
import shopper from "../../assets/shopper.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={funrun}
          link="https://github.com/Nikolaizl/running-scheduling-app"
          h3="FunRun"
          p="Running Schedule App"
        />
        <ProjectCard
          src={freshcut}
          link="https://github.com/Nikolaizl/barber-queue-app"
          h3="Fresh Cut"
          p="Barber Queue App"
        />
        <ProjectCard
          src={good2eat}
          link="https://github.com/Nikolaizl/food-expiry-date-reminder"
          h3="Good2Eat"
          p="Expiry Date Reminder"
        />
        <ProjectCard
          src={shopper}
          link="https://github.com/Nikolaizl/frontend"
          h3="SHOPPER"
          p="Clothing E-commerce"
        />
      </div>
    </section>
  );
}

export default Projects;
