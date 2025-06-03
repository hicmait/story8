import styles from "./UaButton.module.scss";

export const UaButton = ({ variant = "primary", label = "" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>{label}</button>
  );
};
