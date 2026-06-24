import Header from "./components/Header";
import Footer from "./components/Footer";
import PrayerCard from "./components/PrayerCard";
import Container from "./components/Container";
import LocationAndDate from "./components/PrayerCard";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(77);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.vaktija.ba/vaktija/v1/${location}`,
          {
            params: {
              postId: 5,
            },
          },
        );
        console.log(response.data);

        setData(response.data);
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
      <LocationAndDate
        location={data ? data.lokacija : "Sarajevo"}
        date={data ? data.datum[1] : 12}
      />
      <Container>
        {errorMessage && <p>{errorMessage}</p>}
        {vakat.map((time, i) => (
          <PrayerCard
            key={i}
            prayerName={prayerNames[i] || `Prayer ${i + 1}`}
            prayerTime={time}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default App;
