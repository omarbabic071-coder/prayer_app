import fetchData from "./components/api/api";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrayerCard from "./components/PrayerCard/PrayerCard";

function App() {
  fetchData();
  return (
    <>
      <Header />
      <PrayerCard />
      <PrayerCard />
      <PrayerCard />
      <PrayerCard />
      <PrayerCard />
      <PrayerCard />
      <Footer />
    </>
  );
}
export default App;
