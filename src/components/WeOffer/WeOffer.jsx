import { useEffect, useRef } from "react";
import "./WeOffer.css";

const offerCards = [
  { title: "Game UI/UX Design", image: "/src/assests/weoffer1.png" },
  { title: "Game Engine UI Implementation", image: "/src/assests/weOffer2.png" },
  { title: "Motion & VFX UI", image: "/src/assests/weOffer3.png" },
  { title: "UI Optimization & Consultancy", image: "/src/assests/weOffer4.png" },
];

function WeOffer() {
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

  return (
    <section ref={sectionRef} className="offer">
      <p className="offer__eyebrow reveal-on-scroll">We Offer</p>
      <h2 className="reveal-on-scroll">
        Game <span>UI/UX</span> Design and
        <br />
        <span>Implemention</span>
      </h2>
      <p className="offer__copy reveal-on-scroll">
        End to end Game UI/UX design and in engine implementation, creating intuitive,
        performance driven interfaces that enhance gameplay and immersion.
      </p>
      <div className="offer__grid">
        {offerCards.map((card, index) => (
          <div
            className={`offer__card reveal-on-scroll ${
              index < 2 ? "reveal-left" : "reveal-right"
            }`}
            key={card.title}
          >
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
      <p className="offer__note reveal-on-scroll">
        Learn how we support studios from concept to final delivery
      </p>
      <button className="offer__cta reveal-on-scroll" type="button">
        <span>View Our Services</span>
      </button>
    </section>
  );
}

export default WeOffer;
