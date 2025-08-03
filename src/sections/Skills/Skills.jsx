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
        <SkillList src={checkIcon} skill="HTML" />
        <SkillList src={checkIcon} skill="CSS" />
        <SkillList src={checkIcon} skill="JacaScript" />
        <SkillList src={checkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkIcon} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkIcon} skill="Redux" />
        <SkillList src={checkIcon} skill="Git" />
        <SkillList src={checkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
