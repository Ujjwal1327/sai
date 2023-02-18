import React from "react";
import styles from "./AboutUs.module.css";
import MiddleCard from "./middleCard/MiddleCard";

export default function AboutUs() {
  return (
    <main className={styles.about}>
      <div className={styles.top}>
        <h1>About Us & our Work</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s industry.Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      <aside className={styles.middle}>
        <MiddleCard
          number="123"
          title="Project Done"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, est nesciunt minus nam reiciendis quisquam esse nostrum necessitatibus aperiam, magnam, sint dolorum a magni corrupti? Dolores voluptate nemo laudantium expedita?"
        />
        <MiddleCard
          number="123"
          title="Happy Clints"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, est nesciunt minus nam reiciendis quisquam esse nostrum necessitatibus aperiam, magnam, sint dolorum a magni corrupti? Dolores voluptate nemo laudantium expedita?"
        />
        <MiddleCard
          number="123"
          title="Award Won"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, est nesciunt minus nam reiciendis quisquam esse nostrum necessitatibus aperiam, magnam, sint dolorum a magni corrupti? Dolores voluptate nemo laudantium expedita?"
        />

        <MiddleCard
          number="123"
          title="Project Done"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, est nesciunt minus nam reiciendis quisquam esse nostrum necessitatibus aperiam, magnam, sint dolorum a magni cor?"
        />
      </aside>
      <section className={styles.bottom}></section>
    </main>
  );
}
