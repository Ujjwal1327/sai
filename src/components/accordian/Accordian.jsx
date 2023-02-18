import React from "react";
import styles from "./Accordian.module.css";

export default function Accordian() {
  const data = [
    {
      que: "What is xyz?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero velit assumenda at earum voluptates consequatur, debitis deleniti pariatur perspiciatis repudiandae et cupiditate voluptas dolorem dolore sint minima necessitatibus illum?",
    },
    {
      que: "What is xyz?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero velit assumenda at earum voluptates consequatur, debitis deleniti pariatur perspiciatis repudiandae et cupiditate voluptas dolorem dolore sint minima necessitatibus illum?",
    },
    {
      que: "What is xyz?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero velit assumenda at earum voluptates consequatur, debitis deleniti pariatur perspiciatis repudiandae et cupiditate voluptas dolorem dolore sint minima necessitatibus illum?",
    },
    {
      que: "What is xyz?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero velit assumenda at earum voluptates consequatur, debitis deleniti pariatur perspiciatis repudiandae et cupiditate voluptas dolorem dolore sint minima necessitatibus illum?",
    },
    {
      que: "What is xyz?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero velit assumenda at earum voluptates consequatur, debitis deleniti pariatur perspiciatis repudiandae et cupiditate voluptas dolorem dolore sint minima necessitatibus illum?",
    },
  ];

  return (
    <div style={{ marginTop: "80px" }} className={styles.accordian}>
      <div>
        {data.map((cur, ind) => (
          <nav>
            <h1 className={styles.ques}>{cur.que}</h1>
            <p className={styles.show}>{cur.ans}</p>
          </nav>
        ))}
      </div>
    </div>
  );
}
