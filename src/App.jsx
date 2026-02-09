import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import OurWork from "./components/OurWork/OurWork.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
