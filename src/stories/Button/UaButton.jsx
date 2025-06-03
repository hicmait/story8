import styles from "./UaButton.module.scss";

export const UaButton = ({ variant = "primary", children }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};
