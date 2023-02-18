import React from "react";
import { Link } from "react-router-dom";
import { MdFormatColorText } from "react-icons/md";
import { ImClearFormatting } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import styles from "./EachServiceDetail.module.css";
export default function EachServiceDetail() {
  return (
    <div className={styles.eachServiceDetail}>
      <main className={styles.landingSection}>
        <div className={styles.left}>
          <h1>Private Limited Company Registration</h1>
          <h2>
            @999 <sup>*</sup>{" "}
          </h2>
          <ul>
            <li>within 15day</li>
            <li>From anywhere</li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <h1>Submit this form.</h1>
            <form action="">
              <input type="text" placeholder="Name: " />
              <input type="text" placeholder="Email: " />
              <input type="text" placeholder="Mobile No.: " />
              <select>
                <option value="volvo">Private limited</option>
              </select>
              <br />
              <br />
              <Link to="/thank">Send Enquiry </Link>
            </form>
          </div>
        </div>
      </main>
      <section className={styles.benefits}>
        <h1>Private Limited Company? </h1>
        <p>
          A Private Limited Company is a type of business that is owned and
          operated by a small group of people.
        </p>
        <nav>
          {/* <li>Reduced risk of personal liability</li>
          <li>Higher business profile </li>
          <li>Easier access to growth funds</li>
          <li>Lower taxation</li> */}
          <div>
            <img
              src="https://media.istockphoto.com/id/925721224/vector/warning-icon.jpg?s=612x612&w=0&k=20&c=RSXG5vHMg5mfg1KWtty3Xlr0fNQRBr_kam22yHQZwyY="
              alt=""
            />
            <span>Reduced risk of personal liability</span>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/925721224/vector/warning-icon.jpg?s=612x612&w=0&k=20&c=RSXG5vHMg5mfg1KWtty3Xlr0fNQRBr_kam22yHQZwyY="
              alt=""
            />
            <sapn>Reduced risk of personal liability</sapn>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/925721224/vector/warning-icon.jpg?s=612x612&w=0&k=20&c=RSXG5vHMg5mfg1KWtty3Xlr0fNQRBr_kam22yHQZwyY="
              alt=""
            />
            <span>Higher business profile </span>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/925721224/vector/warning-icon.jpg?s=612x612&w=0&k=20&c=RSXG5vHMg5mfg1KWtty3Xlr0fNQRBr_kam22yHQZwyY="
              alt=""
            />
            <span>Easier access to growth funds</span>
          </div>
        </nav>
      </section>

      <aside className={styles.steps}>
        <h1>How does it Work?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          excepturi reiciendis repudiandae assumenda aperiam nemo minus
        </p>

        <nav>
          <div>
            <MdFormatColorText className={styles.icon} />
            <span>Step 1</span>
            <p>Fll the form Properly</p>
          </div>
          <BsArrowRight style={{ fontSize: "40px" }} />
          <div>
            <ImClearFormatting className={styles.icon} />
            <span>Step 2</span>
            <p>Send required documents.</p>
          </div>
          <BsArrowRight style={{ fontSize: "40px" }} />
          <div>
            <MdFormatColorText className={styles.icon} />
            <span>Step 3</span>
            <p>Pay and get your work done.</p>
          </div>
        </nav>
      </aside>
    </div>
  );
}
