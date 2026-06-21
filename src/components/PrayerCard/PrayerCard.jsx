import styles from "./PrayerCard.module.css";

function PrayerCard({ prayerName = "Unknown", prayerTime = "00:00" }) {
  return (
    <section>
      <p className={styles.prayerName}>{prayerName}</p>
      <p className={styles.prayerTime}>{prayerTime}</p>
    </section>
  );
}
export default PrayerCard;
