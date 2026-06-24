function LocationAndDate({
  location = "Sarajevo",
  date = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
}) {
  return (
    <section>
      <p>{location}</p>
      <p>{date}</p>
    </section>
  );
}
export default LocationAndDate;
