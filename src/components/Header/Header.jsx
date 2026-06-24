import { useState } from "react";
import styles from "./Header.module.css";

function Header({ setLocation }) {
  let [enteredLocation, setEnteredLocation] = useState(77);
  function handleLocationChange(event) {
    setEnteredLocation(event.target.value);
  }

  return (
    <header className={styles.header}>
      <p>Vaktiya App Project</p>
      <div>
        <label>City: </label>
        <input
          type="text"
          placeholder="Sarajevo"
          value={enteredLocation}
          onChange={handleLocationChange}
        />
        <button type="button" onClick={() => setLocation(enteredLocation)}>
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
