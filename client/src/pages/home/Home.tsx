import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Featured from "../../components/Featured";
import About from "../../components/About";
import Testimonials from "../../components/Testimonials";
import Hero from "../../components/Hero";
import Cauresel from "../../components/CaureselHero";
import { CourselDeal } from "../../components/CourselDeal";



export default function App() {
  return (
    <>
      <div className="relative h-screen  bg-no-repeat bg-cover bg-center">
        <Cauresel/>
        <Navbar />
        <Hero />
      </div>
      <CourselDeal/>
      <Featured />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
