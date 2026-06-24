function PrayerCard({ prayerName = "Unknown", prayerTime = "00:00" }) {
  const styles = {
    section: {
      backgroundColor: "rgb(0 0 0 / 0.2)",
      paddingBlock: "10px",
      paddingInline: "20px",
      margin: "10px",
      borderRadius: "10px",
      width: "fit-content",
      textAlign: "center",
      minWidth: "250px",
      minHeight: "250px",
      display: "grid",
      placeItems: "center",
    },
    prayerName: {
      fontWeight: "bold",
      fontFamily: "sans-serif",
      fontSize: "3em",
      marginBlock: "10px",
    },
    prayerTime: {
      fontSize: "2em",
      marginBlock: "10px",
    },
  };

  return (
    <section style={styles.section}>
      <p style={styles.prayerName}>{prayerName}</p>
      <p style={styles.prayerTime}>{prayerTime}</p>
    </section>
  );
}

export default PrayerCard;
