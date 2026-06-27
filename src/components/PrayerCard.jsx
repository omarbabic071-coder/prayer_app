function PrayerCard({
  prayerName = "Unknown",
  prayerTime = "00:00",
  isCurrentPrayer = false,
}) {
  return (
    <section
      style={{
        backgroundColor: isCurrentPrayer ? "green" : "rgb(0 0 0 / 0.2)",
      }}
      className="rounded-2xl text-center m-2.5 px-5 py-2 min-w-2xs min-h-fit w-fit bg-black/80"
    >
      <p className="font-bold text-6xl my-2.5">{prayerName}</p>
      <p className="text-3xl my-2.5 ">{prayerTime}</p>
    </section>
  );
}

export default PrayerCard;
