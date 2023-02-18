import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { BsTranslate } from "react-icons/bs";
import logo from "../../assets/logo.jpg";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Link style={{ color: "white" }} to="/">
          <img
            src={logo}
            alt=""
            width=""
            height="60px"
            className={styles.logo}
          ></img>
        </Link>
        <ul className={styles.menu}>
          <li>
            Business Start
            <div className={styles.dropdown1} id={styles.dropdown}>
              <ul>
                <li>
                  <Link to="/public-limited-comapny">Sole Proprietorship</Link>
                </li>
                <li>
                  <a href="/">One Person Comapany</a>
                </li>
                <li>
                  <a href="/">Limited Liability Partnership</a>
                </li>
                <li>
                  <a href="/">StartUp Inda Registration</a>
                </li>
                <li>
                  <a href="/">Company Name Search</a>
                </li>
                <li>
                  <a href="/">Company Name Search</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            Business Protected
            <div className={styles.dropdown2} id={styles.dropdown}>
              <ul>
                <li>
                  <Link>Trademark Search</Link>
                </li>
                <li>
                  <Link>Trademark Registration</Link>
                </li>
                <li>
                  <Link>Trademark Renewal</Link>
                </li>
                <li>
                  <Link>Trademark Objection</Link>
                </li>
                <li>
                  <Link>Trademark Liscence</Link>
                </li>
                <li>
                  <Link>Copyright</Link>
                </li>
                <li>
                  <Link>India Patent Search</Link>
                </li>
                <li>
                  <Link> Patent registration</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            Business Grow
            <div className={styles.dropdown2} id={styles.dropdown}>
              <ul>
                <li>
                  <a href="/">MSME/SSI/Udyam Registration</a>
                </li>
                <li>
                  <a href="/">ISO Certificate </a>
                </li>
                <li>
                  <a href="/">GST</a>
                </li>
                <li>
                  <a href="/">Loan</a>
                </li>
                <li>
                  <a href="/">Labour Compilaince</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            Legal Service
            <div className={styles.dropdown2} id={styles.dropdown}>
              <ul>
                <li>
                  <a href="/">Criminal Case</a>
                </li>
                <li>
                  <a href="/">Civil Case </a>
                </li>
                <li>
                  <a href="/">Family Case</a>
                </li>
                <li>
                  <a href="/">Court Marriage</a>
                </li>
                <li>
                  <a href="/">Property Title Verified</a>
                </li>
                <li>
                  <a href="/">Property Registration</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            Other Services
            <div className={styles.dropdown2} id={styles.dropdown}>
              <ul>
                <li>
                  <a href="/">Pan Card Franchise</a>
                </li>
                <li>
                  <a href="/">Pan Card Issue</a>
                </li>
                <li>
                  <a href="/">Pan Card Change</a>
                </li>
                <li>
                  <a href="/">DSC</a>
                </li>
                <li>
                  <a href="/">Insurance Star Health </a>
                </li>
                <li>
                  <a href="/">Insurance ICICI Prudential </a>
                </li>
                <li>
                  <a href="/">Import Export Code</a>
                </li>
                <li>
                  <a href="/">Import Export Code Modification</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className={styles.navbarRight}>
          <span className={styles.language}>
            <BsTranslate /> Hi/En
          </span>
        </div>
      </div>
    </div>
  );
}
