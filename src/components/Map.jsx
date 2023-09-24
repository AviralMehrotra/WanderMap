import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const long = searchParams.get("long");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h2>Map</h2>
      <h3>
        Position: {lat} and {long}
      </h3>
      <button onClick={() => setSearchParams({ lat: 69, lng: 69 })}>
        Nigga get surprised
      </button>
    </div>
  );
}

export default Map;
