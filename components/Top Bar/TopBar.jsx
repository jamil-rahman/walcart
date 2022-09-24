import { SearchOutlined } from "@ant-design/icons";
import styles from "../../styles/TopBar.module.css";
import profile from "../../public/assets/single-01.png";
import favorites from "../../public/assets/favorites.png";
import cart from "../../public/assets/cart.png";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
export default function TopBar() {
  return (
    <Container style={{ paddingTop: "36px" }}>
      <Row>
        <Col md={1} xs={12}>
          <div className={styles.title}>WALCART</div>
        </Col>

        <Col md={7} xs={12}>
          <div className={styles.search_input}>
            <SearchOutlined className={styles.search_icon} />

            <input type="text" placeholder="What do you want to order?" />
            <div className={styles.search_button}>
              <span>Search</span>
            </div>
          </div>
        </Col>

        <Col md={4} xs={12}>
          <div className={styles.account_container}>
            <div>
              <Image src={profile} alt="profile_icon" />
            </div>

            <div className={styles.sign_in_container}>
              <span className={styles.sign_in_button}>Sign In</span>
              <span className={styles.account_button}>Account</span>
            </div>

            <div className={styles.icon_conatainer}>
              <Image
                src={favorites}
                alt="favorites_icon"
                className={styles.favorite_icon}
              />

              <Image src={cart} alt="cart_icon" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
