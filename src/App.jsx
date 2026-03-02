import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import OurWork from "./components/OurWork/OurWork.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CrittersPage from "./pages/CrittersPage.jsx";
import ChessPage from "./pages/ChessPage.jsx";
import UnitedStatePage from "./pages/UnitedStatePage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import GlobalSectionReveal from "./components/GlobalSectionReveal.jsx";
import ImageWarmup from "./components/ImageWarmup.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <GlobalSectionReveal />
        <ImageWarmup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/critters" element={<CrittersPage />} />
          <Route path="/chess" element={<ChessPage />} />
          <Route path="/unitedstate" element={<UnitedStatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
