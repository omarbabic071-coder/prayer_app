import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrayerCard from "./components/PrayerCard/PrayerCard";
import Container from "./components/Container";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(77);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.vaktija.ba/vaktija/v1/${location}`,
        );
        if (!response.ok) throw new Error("Could not fetch data.");
        const json = await response.json();
        console.log(json);

        setData(json);
        setErrorMessage(null);
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
        setData(null);
      }
    }

    fetchData();
  }, [location]);

  const vakat = data?.vakat || [];
  const prayerNames = [
    "Sabah",
    "Izlazak sunca",
    "Podne",
    "Ikindija",
    "Aksam",
    "Jacija",
  ];

  return (
    <>
      <Header location={location} setLocation={setLocation} />
      <Container>
        {errorMessage && <p>{errorMessage}</p>}
        {!errorMessage && vakat.length === 0 && <p>Loading...</p>}
        {vakat.map((time, idx) => (
          <PrayerCard
            key={idx}
            prayerName={prayerNames[idx] || `Prayer ${idx + 1}`}
            prayerTime={time}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default App;
