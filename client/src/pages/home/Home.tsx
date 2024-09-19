import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Featured from "../../components/Featured";
import About from "../../components/About";
import Testimonials from "../../components/Testimonials";
import Hero from "../../components/Hero";

export default function App() {
  return (
    <>
      <div className="relative h-screen bg-[url('https://images.pexels.com/photos/5699522/pexels-photo-5699522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>
        <Navbar />
        <Hero />
      </div>
      <Featured />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
