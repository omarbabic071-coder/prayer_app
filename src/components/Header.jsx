import { useState } from "react";

function Header({ setLocation }) {
  let [enteredLocation, setEnteredLocation] = useState(77);
  function handleLocationChange(event) {
    setEnteredLocation(event.target.value);
  }

  const styles = {
    header: {
      top: 0,
      left: 0,
      position: "fixed",
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: "10px",
      backgroundColor: "rgb(0 0 0 / 0.2)",
      height: "fit-content",
      padding: "8px 0",
      zIndex: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.1em",
      margin: 0,
    },
    controls: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
    },
  };

  return (
    <header style={styles.header}>
      <p style={styles.title}>Vaktiya App Project</p>
      <div style={styles.controls}>
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
