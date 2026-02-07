import Hero from "../components/Hero/Hero.jsx";
import WeOffer from "../components/WeOffer/WeOffer.jsx";
import Featured from "../components/Featured/Featured.jsx";
import ComingSoon from "../components/ComingSoon/ComingSoon.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import GetInTouch from "../components/GetInTouch/GetInTouch.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <div className="page">
      <Hero />
      <WeOffer />
      <Featured />
      <ComingSoon />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Home;
