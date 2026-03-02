import Navbar from "../components/Navbar/Navbar.jsx";
import GetInTouch from "../components/GetInTouch/GetInTouch.jsx";
import Footer from "../components/Footer/Footer.jsx";

function ContactPage() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
