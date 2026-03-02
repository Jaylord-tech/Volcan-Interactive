import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Featured.css";

const slides = [
  { title: "United State", image: "/Volcan-Interactive/assests/unitedState.png" },
  { title: "Chess Game Creator", image: "/Volcan-Interactive/assests/chess.png" },
  { title: "Halloween", image: "/Volcan-Interactive/assests/halloween.png" },
  { title: "Critters Breakout", image: "/Volcan-Interactive/assests/critters.png" },
];

function Featured() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);
  const loopSlides = useMemo(() => [...slides, ...slides, ...slides], []);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex < slides.length * 2) return;
    const id = setTimeout(() => {
      setNoTransition(true);
      setActiveIndex((prev) => prev - slides.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false);
        });
      });
    }, 600);
    return () => clearTimeout(id);
  }, [activeIndex, slides.length]);

  const handleProjectClick = (title) => {
    if (title === "United State") {
      navigate("/unitedstate#unitedstate");
    }
    if (title === "Chess Game Creator") {
      navigate("/chess#chess");
    }
    if (title === "Halloween") {
      navigate("/blog#halloween");
    }
    if (title === "Critters Breakout") {
      navigate("/critters#critters");
    }
  };

  const handleCardKeyDown = (event, title) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleProjectClick(title);
    }
  };

  const handleViewAllClick = () => {
    navigate("/ourwork");
  };

  return (
    <section ref={sectionRef} className="featured">
      <p className="featured__eyebrow reveal-on-scroll">Proof of Work</p>
      <h2 className="reveal-on-scroll">Featured Projects</h2>
      <p className="featured__copy reveal-on-scroll">
        Projects demonstrating our commitment to polished, production ready game interfaces.
      </p>

      <div className="featured__carousel reveal-on-scroll">
        <div
          className={`featured__track${noTransition ? " no-transition" : ""}`}
          style={{
            transform: `translateX(calc(50% - (var(--card-width) / 2) - ${
              activeIndex
            } * (var(--card-width) + var(--card-gap))))`,
          }}
        >
          {loopSlides.map((slide, index) => {
            const isClickable =
              slide.title === "United State" ||
              slide.title === "Chess Game Creator" ||
              slide.title === "Halloween" ||
              slide.title === "Critters Breakout";

            return (
              <div
                className="featured__card"
                onClick={isClickable ? () => handleProjectClick(slide.title) : undefined}
                onKeyDown={
                  isClickable
                    ? (event) => handleCardKeyDown(event, slide.title)
                    : undefined
                }
                role={isClickable ? "button" : undefined}
                tabIndex={isClickable ? 0 : undefined}
                aria-label={
                  slide.title === "United State"
                    ? "Open United State project"
                    : slide.title === "Chess Game Creator"
                    ? "Open Chess Game Creator project"
                    : slide.title === "Halloween"
                    ? "Open Halloween project"
                    : slide.title === "Critters Breakout"
                    ? "Open Critters Breakout project"
                    : undefined
                }
                data-link={
                  slide.title === "United State"
                    ? "unitedstate"
                    : slide.title === "Chess Game Creator"
                    ? "chess"
                    : slide.title === "Halloween"
                    ? "halloween"
                    : slide.title === "Critters Breakout"
                    ? "critters"
                    : undefined
                }
                key={`${slide.title}-${index}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        className="featured__link reveal-on-scroll"
        type="button"
        onClick={handleViewAllClick}
      >
        View All
      </button>
    </section>
  );
}

export default Featured;
