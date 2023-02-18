import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceListCard.module.css";
export default function ServiceListCard({ data }) {
  return (
    <div className={styles.cardConatiner}>
      {data.map((curElem, i) => {
        return (
          <>
            <div key={i} className={`${styles.serviceListCard} `}>
              <img src={curElem.img} alt="" />
              <h1>{curElem.title}</h1>
              <p>Lorem ipsum dolor sit amet.</p>
              <Link>
                <span>Buy Now</span>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
}
