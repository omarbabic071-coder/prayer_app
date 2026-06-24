function LocationAndDate({ location, date }) {
  let styles = {
    p: {
      fontSize: "2em",
      fontWeight: "bold",
    },

    section: {
      marginTop: "100px",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
    },
  };
  return (
    <section style={styles.section}>
      <p style={styles.p}>{location}</p>
      <p style={styles.p}>{date}</p>
    </section>
  );
}
export default LocationAndDate;
