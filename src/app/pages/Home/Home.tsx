import Banner from '../../components/Banner/Banner';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import NewsLetter from '../../components/Newsletter/Newsletter';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Banner />
      <NewsLetter />
      <Footer />
    </>
  );
}
