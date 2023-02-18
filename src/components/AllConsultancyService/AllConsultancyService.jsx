import React, { useState } from "react";
import { ServiceList } from "../../assets/Data/ServiceList";
import ServiceListCard from "../ServiceListCard/ServiceListCard";
import styles from "./AllConsultancyService.module.css";
export default function AllConsultancyService() {
  const [currentList, setCurrentList] = useState(ServiceList);
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);

  const filterItem = (category) => {
    if (category === "All") {
      setA(true);
      setB(false);
      setC(false);
      setD(false);
      setCurrentList(ServiceList);
      return 0;
    }
    if (category === "Business Growth") {
      setA(false);
      setB(true);
      setC(false);
      setD(false);
    }
    if (category === "Business Manage") {
      setA(false);
      setB(false);
      setC(true);
      setD(false);
    }
    if (category === "Business Start") {
      setA(false);
      setB(false);
      setC(false);
      setD(true);
    }
    const updatedList = ServiceList.filter((curElem) => {
      return curElem.type === category;
    });
    setCurrentList(updatedList);
  };
  return (
    <div className={styles.AllConsultancyService}>
      <h2>Services</h2>
      <p>
        With the help of our diligent team of professionals we provide all sort
        of services related to Goods and Service Tax (GST), Trademark, Import
        Export Code, Startup Recognition Certificate, Actinnting, Auditing,
        Company Law Matters and many more
      </p>
      <ul className={styles.serviceMenu}>
        <li
          className={a ? styles.active : ""}
          onClick={() => {
            filterItem("All");
          }}
        >
          All
        </li>
        <li
          className={b ? styles.active : ""}
          onClick={() => {
            filterItem("Business Growth");
          }}
        >
          Business Growth
        </li>
        <li
          className={c ? styles.active : ""}
          onClick={() => {
            filterItem("Business Manage");
          }}
        >
          Business Manage
        </li>
        <li
          className={d ? styles.active : ""}
          onClick={() => {
            filterItem("Business Start");
          }}
        >
          Business Start
        </li>
      </ul>
      <ServiceListCard data={currentList} />
    </div>
  );
}
