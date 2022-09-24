import Image from "next/image";
import { useDispatch } from "react-redux";
import {cart, increment} from "../../redux/slices/cartSlice"

import styles from "../../styles/Category.module.css";
export default function Category(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.category_card}>
      <Image src={props.src} alt={props.alt} />
      <span onClick={()=>dispatch(increment())}>{props.title} 
      {/* {props.cart} */}
      </span>
    </div>
  );
}
