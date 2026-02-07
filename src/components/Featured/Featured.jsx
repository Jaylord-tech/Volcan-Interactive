import { useEffect, useMemo, useRef, useState } from "react";
import "./Featured.css";

const slides = [
  { title: "United State", image: "/src/assests/unitedState.png" },
  { title: "Chess Game Creator", image: "/src/assests/chess.png" },
  { title: "Halloween", image: "/src/assests/halloween.png" },
  { title: "Critters Breakout", image: "/src/assests/critters.png" },
];

function Featured() {
  const [activeIndex, setActiveIndex] = useState(slides.length);
  const [noTransition, setNoTransition] = useState(false);
  const loopSlides = useMemo(() => [...slides, ...slides, ...slides], []);
  const sectionRef = useRef(null);

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
    setNoTransition(true);
    const id = setTimeout(() => {
      setActiveIndex(slides.length);
      setNoTransition(false);
    }, 40);
    return () => clearTimeout(id);
  }, [activeIndex]);

  const normalizedIndex = activeIndex % slides.length;
  const trackStyle = {
    transform: `translateX(calc(50% - (var(--card-width) / 2) - ${activeIndex} * (var(--card-width) + var(--card-gap))))`,
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
          style={trackStyle}
        >
          {loopSlides.map((slide, index) => {
            const position = index % slides.length;
            const prevIndex = (normalizedIndex - 1 + slides.length) % slides.length;
            const nextIndex = (normalizedIndex + 1) % slides.length;
            const isActive = position === normalizedIndex;
            const isPrev = position === prevIndex;
            const isNext = position === nextIndex;

            return (
              <div
                className={`featured__card${isActive ? " is-active" : ""}${
                  isPrev ? " is-prev" : ""
                }${isNext ? " is-next" : ""}`}
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

      <div className="featured__progress reveal-on-scroll">
        <span style={{ width: `${((normalizedIndex + 1) / slides.length) * 100}%` }} />
      </div>

      <button className="featured__link reveal-on-scroll" type="button">
        View All
      </button>
    </section>
  );
}

export default Featured;
