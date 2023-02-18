import React from "react";
import styles from "./OurTeam.module.css";
import OurTeamImage from "./OurTeamImage/OurTeamImage";
export default function OurTeam() {
  return (
    <div className={styles.ourTeam}>
      <h1>Meet Our Team</h1>
      <span className={styles.circle1}></span>
      <span className={styles.circle2}></span>
      <main className={styles.ourTeam_imageContainer}>
        <OurTeamImage color="red" />
        <OurTeamImage color="green" />
        <OurTeamImage color="black" />
        <OurTeamImage color="blue" />
      </main>
    </div>
  );
}
