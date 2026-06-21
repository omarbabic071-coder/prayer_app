import fetchData from "./components/api/api";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrayerCard from "./components/PrayerCard/PrayerCard";
import Container from "./components/Container";

function App() {
  fetchData();
  return (
    <>
      <Header />
      <Container>
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
      </Container>
      <Footer />
    </>
  );
}
export default App;
