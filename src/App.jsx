import Header from "./components/Header";
import Footer from "./components/Footer";
import PrayerCard from "./components/PrayerCard";
import Container from "./components/Container";
import Location from "./components/Location";
import DateComponent from "./components/DateComponent";
import PrayerTimer from "./components/PrayerTimer";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(77);
  const [errorMessage, setErrorMessage] = useState(null);

  let now = new Date();
  let currentTimeInMins = now.getHours() * 60 + now.getMinutes();

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
  const prayerNames = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

  let prayerTimeInMins = data?.vakat.map((time) => {
    const [hours, minutes] = time.split(":");
    return Number(hours) * 60 + Number(minutes);
  });

  return (
    <>
      <Header location={location} setLocation={setLocation} />

      <PrayerTimer timer={12} />
      <Location location={data ? data.lokacija : "Sarajevo"} />
      <DateComponent date={data ? data.datum[1] : 10} />

      <Container>
        {errorMessage && <p>{errorMessage}</p>}
        {vakat.map((time, i) => (
          <PrayerCard
            key={i}
            prayerName={prayerNames[i] || `Prayer ${i + 1}`}
            prayerTime={time}
            isCurrentPrayer={
              currentTimeInMins < prayerTimeInMins[i + 1] &&
              currentTimeInMins > prayerTimeInMins[i]
            }
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default App;
