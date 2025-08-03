import React from "react";
import styles from "./SkillsStyles.module.css";
import checkLight from "../../assets/checkmark-light.svg";
import checkDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkIcon = theme === "light" ? checkLight : checkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkIcon} skill="HTML5" />
        <SkillList src={checkIcon} skill="CSS3" />
        <SkillList src={checkIcon} skill="JavaScript (ES6+)" />
        <SkillList src={checkIcon} skill="React" />
        <SkillList src={checkIcon} skill="React Router" />
        <SkillList src={checkIcon} skill="Redux" />
        <SkillList src={checkIcon} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkIcon} skill="Express" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkIcon} skill="PostgreSQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkIcon} skill="Jest" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkIcon} skill="Git" />
        <SkillList src={checkIcon} skill="GitHub" />
        <SkillList src={checkIcon} skill="CI/CD" />
        <SkillList src={checkIcon} skill="Vercel" />
        <SkillList src={checkIcon} skill="Firebase" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkIcon} skill="API Integration" />
      </div>
    </section>
  );
}

export default Skills;
