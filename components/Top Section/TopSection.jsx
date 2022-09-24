import { Container, Row } from "react-bootstrap";
import styles from "../../styles/TopSection.module.css";
import BottomNavigation from "../Bottom Navigation/BottomNavigation";
import TopBar from "../Top Bar/TopBar";
import TopLinks from "../Top Links/TopLinks";
function TopSection() {
  return (
    // <div className={styles.top_container}>
    //   <div className={styles.top_layout}>
    <div style={{ backgroundColor: "#031424", color: "white" }}>
      <Container style={{ backgroundColor: "#031424", color: "white" }}>
        <Row>
          <TopLinks />
          <TopBar />
          <BottomNavigation />
        </Row>
      </Container>
    </div>

    //   </div>
    // </div>
  );
}

export default TopSection;
