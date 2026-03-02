import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { getContactOffset, scrollToContact } from "../../utils/scrollToContact.js";
import "./Hero.css";

const heroImages = [
  "/Volcan-Interactive/assests/heroImg1.png",
  "/Volcan-Interactive/assests/heroImg2.png",
  "/Volcan-Interactive/assests/heroImg3.png",
  "/Volcan-Interactive/assests/heroImg4.png",
  "/Volcan-Interactive/assests/heroImg5.png",
];


function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef(null);

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
    scrollToContact({ offset: Math.max(getContactOffset("/") - 90, 0) });
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
