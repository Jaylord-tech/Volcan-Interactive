import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import { getContactOffset, scrollToContact } from "../../utils/scrollToContact.js";
import "./Hero.css";

const heroImages = [
  "/src/assests/heroImg1.png",
  "/src/assests/heroImg2.png",
  "/src/assests/heroImg3.png",
  "/src/assests/heroImg4.png",
  "/src/assests/heroImg5.png",
];


function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();
      const scrollY = Math.max(0, -rect.top);
      hero.style.setProperty("--hero-text-shift", `${scrollY * 0.75}px`);
      hero.style.setProperty("--hero-bg-shift", `${scrollY * 0.08}px`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetInTouch = () => {
    if (document.getElementById("contact")) {
      scrollToContact({ offset: getContactOffset("/") });
      return;
    }
    navigate({ pathname: "/", hash: "#contact" });
  };

  return (
    <section ref={heroRef} className="hero-landing">
      <Navbar />
      <div
        className="hero-landing__background"
        style={{ backgroundImage: `url(${heroImages[activeIndex]})` }}
      />
      <div className="hero-landing__content">
        <div className="hero-landing__text reveal reveal-up">
          <h1>
            Crafting the Future of Interactive
            <br />
            Game Interfaces
          </h1>
          <p>
            Volcan Interactive is{" "}
            <span className="hero-landing__highlight">
              Africa&apos;s first real time Game UI/UX Co-development studio
            </span>
            . Designing intuitive, performance focused interfaces that elevate
            gameplay and player immersion, without compromising speed, creativity,
            or quality.
          </p>
        </div>
        <button
          className="hero-landing__cta reveal reveal-up reveal-delay-1"
          type="button"
          onClick={handleGetInTouch}
        >
          <span>Get in Touch</span>
        </button>
      </div>
      <div className="hero-landing__dots">
        {heroImages.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            className={`hero-landing__dot${
              index === activeIndex ? " is-active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show hero slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;
