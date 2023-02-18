import React from "react";
import styles from "./ThankYou.module.css";
import { RxTriangleRight } from "react-icons/rx";
import { BsExclamationLg } from "react-icons/bs";
export default function ThankYouPage() {
  return (
    <main className={styles.thankYou}>
      <nav className={styles.left}>
        <div className={styles.circle}>
          <h1>Thank</h1>
          <h2>You</h2>
          <BsExclamationLg className={styles.exclaimation} />
        </div>
        <RxTriangleRight className={styles.triangle} />
      </nav>
      <aside className={styles.right}>
        <div className={styles.content}>
          <h1>Thank You</h1>
          <p>Your submission has been recieved </p>
          <p>look have you got the email?</p>
          <p>We will in touch and contact you soon.</p>
          <a href="/">Back to home </a>
        </div>
      </aside>
    </main>
  );
}
