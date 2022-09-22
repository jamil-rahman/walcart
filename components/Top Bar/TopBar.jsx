import { SearchOutlined } from "@ant-design/icons";
import styles from "../../styles/TopBar.module.css";
import svg from "../../public/assets/single-01.png"
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
    <Image src={svg} alt="profile_icon"/>
    </div>

    {/* Favorites */}

    {/* Cart */}
    </div>
  );
}
