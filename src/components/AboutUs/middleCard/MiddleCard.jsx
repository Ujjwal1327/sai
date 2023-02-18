import React from "react";
import styles from "./MiddleCard.module.css";
export default function MiddleCard(props) {
  return (
    <article className={styles.aboutCard}>
      <h2>{props.number}</h2>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </article>
  );
}
