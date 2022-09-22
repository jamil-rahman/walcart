import { SearchOutlined } from "@ant-design/icons";
import styles from "../../styles/TopBar.module.css";
import profile from "../../public/assets/single-01.png";
import favorites from "../../public/assets/favorites.png";
import cart from "../../public/assets/cart.png";
import Image from "next/image";
export default function TopBar() {
  return (
    <div className={styles.topbar_container}>
      {/* Logo */}
      <div className={styles.title}>WALCART</div>

      {/* Search bar */}
      <div className={styles.search_bar}>
        <div className={styles.search_input}>
          <div className={styles.search_icon}>
            <SearchOutlined />
          </div>
          <input type="text" placeholder="What do you want to order?" />
          <div className={styles.search_button}>
            <span>Search</span>
          </div>
        </div>
      </div>

      {/* Account */}
      <div className={styles.account_container}>
        <div style={{ marginRight: "20px" }}>
          <Image src={profile} alt="profile_icon" />
        </div>

        <div className={styles.sign_in_container}>
          <span className={styles.sign_in_button}>Sign In</span>
          <span className={styles.account_button}>Account</span>
        </div>

        <div className={styles.favorites}>
          <Image
            src={favorites}
            alt="favorites_icon"
            className={styles.favorite_icon}
          />

          <div className={styles.cart_icon} style={{ marginLeft: "49px" }}>
            <Image src={cart} alt="cart_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
