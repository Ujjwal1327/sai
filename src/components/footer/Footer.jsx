import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className={styles.footer}>
      <main>
        <p>Get Connected on Social networks</p>
        <div className={styles.socialLinks}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FiMail />
          <FaLinkedinIn />
        </div>
      </main>
      <section>
        <div>
          <h2>Head Office</h2>
          <p>
            C/o Raja Babu, Road No. 7, <br /> Opp-Narayan Market, <br /> Near
            Karan Samrat <br /> communuty Hall, Nahar Road, Bajrangpuri <br />
            PS-Alamganj, pO-Gulzarbagh, <br /> Patna 07
          </p>
        </div>
        <div>
          <h2>Terms & conditions</h2>
          <Link to="/faq">FAQ's</Link>
          <Link to="/policy">Privacy Policy</Link>

          <Link to="review">Review</Link>
        </div>
        <div>
          <h2>Service</h2>
          <a href="/">Trademark Registraion</a>
          <a href="/">GST registration</a>
          <a href="/">Digital Signature</a>
          <a href="/">FSSAI food registration</a>
          <a href="/"> ISO certification</a>
          <a href="/">Company registration</a>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>+91 9334118666</p>
          <p>+91 7319886036</p>
          <p>+91 6202666912</p>
          <p>saikripconsultants01@gmail.com</p>
          <p>info@shrisaikripaconsultancy.com</p>
          <p>www.shrisaikripaconsultancy.com</p>
        </div>
      </section>

      <nav>copyright @ {year} | All right reserved </nav>
    </div>
  );
}
