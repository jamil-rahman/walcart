import { Container, Row } from "react-bootstrap";
import BottomNavigation from "../Bottom Navigation/BottomNavigation";
import TopBar from "../Top Bar/TopBar";
import TopLinks from "../Top Links/TopLinks";
function TopSection() {
  return (
    <div style={{ backgroundColor: "#031424", color: "white" }}>
      <Container style={{ backgroundColor: "#031424", color: "white" }}>
        <Row>
          <TopLinks />
          <TopBar />
          <BottomNavigation />
        </Row>
      </Container>
    </div>
  );
}

export default TopSection;
