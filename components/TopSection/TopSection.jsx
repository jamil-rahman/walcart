import React from "react";
import styles from "../../styles/TopSection.module.css";
function TopSection() {
  return (
    <div className={styles.top_container}>
      <div className={styles.container}>
        <div className={styles.quick_links}>
          <span className={styles.links}>About Us</span>{" "}
          <span className={styles.separator_1}></span>
          <span className={styles.links_1}>My Account </span>{" "}
          <span className={styles.separator_2}></span>
          <span className={styles.links_2}>Featured Products </span>{" "}
          <span className={styles.separator_3}></span>
          <span className={styles.links_3}>About</span>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
