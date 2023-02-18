import React from "react";
import styles from "./OurTeamImage.module.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
export default function OurTeamImage() {
  return (
    <section className={styles.ourTeamImage}>
      <div className={styles.imageSection}>
        <div></div>
        <img
          src="https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80"
          alt=""
        />
      </div>
      <nav className={styles.contentSection}>
        <h2>Name</h2>
        <h3>Designation</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. in?</p>
        <div className={styles.socialLinks}>
          <FaFacebookF className={`${styles.icons} ${styles.icon1}`} />
          <FaInstagram className={`${styles.icons} ${styles.icon2}`} />
          <FaTwitter className={`${styles.icons} ${styles.icon3}`} />
        </div>
      </nav>
    </section>
  );
}
