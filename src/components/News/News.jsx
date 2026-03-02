import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./News.css";

function News() {
  return (
    <div className="page">
      <Navbar />
      <main className="news">
        <div className="news__content">
          <h1 className="news__title">
            <span className="news__word news__word--left">
              <span className="news__zoom">COMING</span>
            </span>{" "}
            <span className="news__word news__word--right">
              <span className="news__zoom">SOON...</span>
            </span>
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default News;
