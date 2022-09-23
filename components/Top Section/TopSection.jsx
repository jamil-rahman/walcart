import styles from "../../styles/TopSection.module.css";
import BottomNavigation from "../Bottom Navigation/BottomNavigation";
import TopBar from "../Top Bar/TopBar";
import TopLinks from "../Top Links/TopLinks";
function TopSection() {
  return (
    <div className={styles.top_container}>
      <div className={styles.top_layout}>
      <TopLinks />
      <TopBar />
      <BottomNavigation />
      </div>
    </div>
  );
}

export default TopSection;
