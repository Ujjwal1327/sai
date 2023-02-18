import React from "react";
import styles from "./ServiceProvide.module.css";
import { Link } from "react-router-dom";
import ServiceProvideCard from "./ServiceProvideCard/ServiceProvideCard";

import ideaMan from "../../assets/ideaMan.png";
export default function ServiceProvide() {
  return (
    <div className={styles.serviceProvide}>
      <p>Services we Provide</p>
      <div className={styles.cardContainer}>
        <Link to="/loan-service">
          <ServiceProvideCard
            src="https://media.istockphoto.com/id/1300856197/vector/businessman-sitting-on-a-big-money-and-coins-finance-success-money-wealth-vector.jpg?s=612x612&w=0&k=20&c=jYtRSNWjlYl7UH-1c5xxY5YiYjHV2Almmv31v_Kjy6A="
            title="Loan "
          />
        </Link>
        <Link to="consultancy-service" target="_blank">
          <ServiceProvideCard
            src="https://www.maxpixel.net/static/photo/1x/Business-People-Team-Meeting-Teamwork-Company-5840870.png"
            title="Consultancy"
          />
        </Link>

        <Link to="/legal-service">
          <ServiceProvideCard
            src="https://cdn.pixabay.com/photo/2022/11/19/21/13/judge-7602999_960_720.png"
            title="Legal Help"
          />
        </Link>
      </div>
      <div className={styles.question}>
        <h1>What is Consultancy firm and what is does?</h1>
        <p>
          Consultancy firms are hired to help their clients with a dilemma, for
          which specialist expertise or knowledge is needed which is otherwise
          lacking on the clients' end.
        </p>
        <ul className={styles.example}>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
          <li>Gst Registration</li>
        </ul>
        <img src={ideaMan} alt="" />
      </div>
    </div>
  );
}
