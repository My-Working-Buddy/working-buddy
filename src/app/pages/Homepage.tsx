import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
     <div className="py=4">some Home page content here</div> 
      <Footer />;
    </>
  );
}
