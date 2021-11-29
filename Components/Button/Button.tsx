import React from "react";
import styles from "./Button.module.scss";

interface cp_button_props {
  text: string;
}

const Button = (props: cp_button_props) => (
  <button className={styles["cp_button"]}>{props.text}</button>
);

export default Button;
