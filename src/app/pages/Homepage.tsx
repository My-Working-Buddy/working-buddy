import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Carousel from "../components/Carousel/Carousel";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Banner />
      <Footer />
    </>
  );
}
