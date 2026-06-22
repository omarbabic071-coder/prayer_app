import styles from "./Header.module.css";

function Header({ location = "", setLocation }) {
  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  return (
    <header className={styles.header}>
      <p>Vaktiya App Project</p>
      <div>
        <label>City: </label>
        <input
          type="text"
          placeholder="Sarajevo"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="button" onClick={() => setLocation(location)}>
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
