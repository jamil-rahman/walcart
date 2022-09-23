import Image from "next/image";
import styles from "../../styles/BottomNavigation.module.css";
import menuBar from "../../public/assets/menu_bar.png";
import { CaretDownFilled, DownOutlined } from "@ant-design/icons";
import discounts from "../../public/assets/discount.png"
function BottomNavigation() {
  return (
    <div className={styles.bottom_navigation_container}>
        {/* Nav items */}
        <div className={styles.nav_items_container}>
            <div className={styles.nav_item_1}>
                <Image src={menuBar} alt="menu bar icon" />
                Top Categories
                <CaretDownFilled />
            </div>

            <div className={styles.nav_item_2}>
               Exclusive Deals
                <DownOutlined />
            </div>

            <div className={styles.nav_item_2}>
                Smartwatches
                <DownOutlined />
            </div>

            <div className={styles.nav_item_2}>
               Cell Phone
            </div>

            <div className={styles.nav_item_2}>
                Headphone
            </div>
        </div>

        <div className={styles.discounts_contaienr}>
            <Image src={discounts} alt="discounts" />
           
           <div className={styles.discounts}>
            <span className="text-muted" style={{fontSize: "0.76rem"}}>
                Only this weekend
            </span>

            <span style={{color: "#FF4E53", fontWeight:"600"}}>
                Super Discount
            </span>
           </div>
            <DownOutlined />
        </div>


    </div>
  );
}

export default BottomNavigation;
