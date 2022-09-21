import styles from "../../styles/TopSection.module.css";
import TopLinks from "../Top Links/TopLinks";
function TopSection() {
  return (
    <div className={styles.top_container}>
      <TopLinks />
      
    </div>
  );
}

export default TopSection;
