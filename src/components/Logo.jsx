import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/name-logo-2.png"
        alt="WanderMap logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
