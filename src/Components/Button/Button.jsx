import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

export const Button = ({ isOutline, icon, text }) => {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};
