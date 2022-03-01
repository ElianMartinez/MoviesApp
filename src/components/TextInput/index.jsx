import React from "react";
import styles from "./styles.module.css";
export default function TextInput(props) {
  return (
    <div className={styles.formGrup}>
      <label>{props.label}</label>
      <input
        autoFocus={props.autoFocus}
        name={props.nameInput}
        type={props.type}
        value={props.name}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        className={props.errors && props.touched && styles.error}
      />
      {props.errors && props.touched && <span>{props.errors}</span>}
    </div>
  );
}
