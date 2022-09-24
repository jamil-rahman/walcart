import { DownOutlined } from "@ant-design/icons";
import styles from "../../styles/TopLinks.module.css";
export default function TopLinks() {
  return (
    <div className={styles.link_container}>
      <div className={styles.quick_links_container}>
        <span className={styles.link_1}>About us</span>
        <span className={styles.seperator}>| </span>
        <span className={styles.link_2}>My Account</span>
        <span className={styles.seperator}>| </span>
        <span className={styles.link_3}>Featured Products</span>
        <span className={styles.seperator}>| </span>
        <span className={styles.link_4}>Contact</span>
      </div>
      <div className={styles.settings}>
        <span className={styles.link_1}>Order Tracking</span>
        <span className={styles.link_2}>
          English <DownOutlined className={styles.icon} />
        </span>
        <span className={styles.link_2}>
          USD <DownOutlined className={styles.icon} />
        </span>
      </div>
    </div>
  );
}
