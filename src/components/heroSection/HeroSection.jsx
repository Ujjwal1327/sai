import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftContent}>
        <div className={styles.content}>
          <h1>The firm you should trust for legal support.</h1>
          <p>End to end solution of legal operations.</p>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            nam excepturi ullam saepe eum similique <br /> totam ipsa. Magnam
            reiciendis cum culpa, <br /> odit harum quasi quas
          </h3>
          <div>
            <a href="/" className={styles.button1}>
              Book a Demo
            </a>
            <Link to="/maintainance" className={styles.button2}>
              Join Us
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rightForm}>
        <div className={styles.circle}></div>
        <div className={styles.square}></div>
        <div className={styles.formSection}>
          <span>
            <div style={{ backgroundColor: "red" }}></div>
            <div style={{ backgroundColor: "blue" }}></div>
            <div style={{ backgroundColor: "yellow" }}></div>
          </span>
          <div className={styles.form}>
            <h1>Enter Your Basic Information</h1>
            <form action="">
              <input type="text" value="Name: " />
              <input type="text" value="Email: " />
              <input type="text" value="Mobile No.: " />
              <input type="text" value="City: " />
              <select id="cars" name="cars" value="looking for">
                <option value="volvo">Private Limited</option>
                <option value="saab">Public limited</option>
                <option value="fiat">Startup registration</option>
                <option value="audi">Digital Signature</option>
              </select>
              <br />
              <br />
              <Link to="/thank">Send Enquiry </Link>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.belowContent}>
        <span>
          <h1>500+</h1>
          <h2>Successful Cases</h2>
        </span>
        <span>
          <h1>500+</h1>
          <h2>Successful Cases</h2>
        </span>
        <span>
          <h1>500+</h1>
          <h2>Successful Cases</h2>
        </span>
      </div>
    </section>
  );
}
