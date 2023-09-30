import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Explore. Discover. Repeat. <br />
          WanderMap Awaits Your Explorations
        </h1>
        <h2>
          Join us on a journey where every destination becomes a story, every
          moment a memory. <br />
          Explore new horizons, savor diverse cultures, and make your mark on
          the map of life's adventures. <br />
          Let's map your journeys together, one pin at a time.
        </h2>
        <Link to="/login" className="cta">
          Start Tracking
        </Link>
      </section>
    </main>
  );
}
