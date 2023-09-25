import styles from "./MapSpinner.module.css";

function MapSpinner() {
  return (
    <svg className={styles.loader} viewBox="25 25 50 50">
      <circle className={styles.circlo} r="20" cy="50" cx="50"></circle>
    </svg>
  );
}

export default MapSpinner;
