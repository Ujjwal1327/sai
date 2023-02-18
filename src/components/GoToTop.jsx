import React, { useEffect, useState } from "react";
import styles from "./GoToTop.module.css";
import { FiArrowUp } from "react-icons/fi";
export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightUntilHidden = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightUntilHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  return (
    <>
      {isVisible && (
        <main className={styles.goToTop}>
          <div className={styles.topBtn} onClick={goToTop}>
            <FiArrowUp className={styles.topIcon} />
          </div>
        </main>
      )}
    </>
  );
}
