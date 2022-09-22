import styles from "../../styles/TopSection.module.css";
import TopBar from "../Top Bar/TopBar";
import TopLinks from "../Top Links/TopLinks";
function TopSection() {
  return (
    <div className={styles.top_container}>
      <TopLinks />
      <TopBar />
    </div>
  );
}

export default TopSection;
