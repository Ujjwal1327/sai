import React from "react";
import { Link } from "react-router-dom";
import styles from "./UnderMaintainance.module.css";
export default function UnderMaintainance() {
  return (
    <div className={styles.maintain}>
      <img
        src="https://cdni.iconstint.com/illustration/free/thumb/website-maintenance-2043027-1731286.png"
        alt=""
      />
      <h1>We will back soon!</h1>
      <p>
        Sorry for the inconvenience. We’re performing some maintenance at the
        moment. If you need to you can always main us on
        <b> example@gmail.com </b>
        for updates, otherwise we’ll be back up shortly!
      </p>
      <span>------ShriSaiKripaCosultancy Tem------</span>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}
