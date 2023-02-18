import React from "react";
import styles from "./ServiceProvideCard.module.css";
export default function ServiceProvideCard(props) {
  return (
    <div className={styles.card}>
      <img src={props.src} alt="" />
      <h2>{props.title}</h2>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In
        necessitatibus commodi illo officia officiis placeat ipsa quia repellat
        ex tempore expedita esse aspernatur quam quasi id nemo accusantium quod,
      </span>
      <a href="/">More...</a>
    </div>
  );
}
