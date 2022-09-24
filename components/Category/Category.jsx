import Image from "next/image";

import styles from "../../styles/Category.module.css";
export default function Category(props) {
  return (
    <div className={styles.category_card}>
      <Image src={props.src} alt={props.alt} />
      <span>{props.title}</span>
    </div>
  );
}
