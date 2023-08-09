import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import CaptionCarousel from "../components/Carousel/Carousel";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <CaptionCarousel />
      <Banner />
      <Footer />
    </>
  );
}
