import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OurWork.css";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import GetInTouch from "../GetInTouch/GetInTouch.jsx";

const showcaseItems = [
  {
    title: "Chess Game Creator",
    image: "/assests/chessGame.webp",
    platforms: ["PC", "Console"],
  },
  {
    title: "Halloween",
    image: "/assests/halloween.webp",
    platforms: ["PC", "Console"],
  },
  {
    title: "Critters' Breakout!",
    image: "/assests/critters.webp",
    isWide: false,
    platforms: ["PC", "Mobile"],
  },
  {
    title: "United State",
    image: "/assests/unitedState.webp",
    platforms: ["PC", "Console"],
  },
];

const filters = ["All", "PC", "Console", "Mobile", "Web3"];

const partnerLogos = [
  { name: "Figma", image: "/assests/figma.webp" },
  { name: "Unreal", image: "/assests/unreal.webp" },
  { name: "Rive", image: "/assests/rive.webp" },
  { name: "Unity", image: "/assests/unity.webp" },
  { name: "Photoshop", image: "/assests/ps.webp" },
];

function OurWork() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

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
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]);

  const filteredShowcaseItems =
    activeFilter === "All"
      ? showcaseItems
      : showcaseItems.filter((item) => item.platforms.includes(activeFilter));

  const centerLastCard = filteredShowcaseItems.length % 3 === 1;

  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
  };

  const resetCardTilt = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-rotate-x", "0deg");
    card.style.setProperty("--tilt-rotate-y", "0deg");
  };

  const handleCardClick = (item) => {
    if (item.title === "United State") {
      navigate("/unitedstate");
    }
    if (item.title === "Chess Game Creator") {
      navigate("/chess");
    }
    if (item.title === "Halloween") {
      navigate("/blog");
    }
    if (item.title === "Critters' Breakout!") {
      navigate("/critters");
    }
  };

  const handleCardKeyDown = (event, item) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick(item);
    }
  };

  return (
    <div className="page">
      <Navbar />
      <main ref={sectionRef} className="ourwork">
        <div className="ourwork__header">
          <p className="ourwork__eyebrow reveal-on-scroll reveal-up">Proof of Work</p>
        <h1 className="ourwork__title">
          <span className="reveal-on-scroll reveal-left reveal-delay-1">Full</span>{" "}
          <span className="reveal-on-scroll reveal-right reveal-delay-2">Featured</span>
        </h1>
          <div className="ourwork__filters reveal-on-scroll reveal-up reveal-delay-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "is-active" : undefined}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={`ourwork__grid${centerLastCard ? " ourwork__grid--center-last" : ""}`}>
        {filteredShowcaseItems.map((item, index) => {
          const isClickable =
            item.title === "United State" ||
            item.title === "Chess Game Creator" ||
            item.title === "Halloween" ||
            item.title === "Critters' Breakout!";

          let revealClass = "reveal-up";
          if (index === 0) revealClass = "reveal-left";
          if (index === 1) revealClass = "reveal-down";
          if (index === 2) revealClass = "reveal-right";
          if (index === 3) revealClass = "reveal-up";

          return (
            <article
              className={`ourwork__card reveal-on-scroll ${revealClass}${
                item.isWide ? " ourwork__card--wide" : ""
              }`}
              key={item.title}
              onMouseMove={handleCardMove}
              onMouseLeave={resetCardTilt}
              onClick={() => handleCardClick(item)}
              onKeyDown={(event) => handleCardKeyDown(event, item)}
              role={isClickable ? "button" : undefined}
              tabIndex={isClickable ? 0 : undefined}
              aria-label={
                item.title === "United State"
                  ? "Open United State project"
                  : item.title === "Chess Game Creator"
                  ? "Open Chess Game Creator project"
                  : item.title === "Halloween"
                  ? "Open Halloween project"
                  : item.title === "Critters' Breakout!"
                  ? "Open Critters Breakout project"
                  : undefined
              }
              data-link={
                item.title === "United State"
                  ? "unitedstate"
                  : item.title === "Chess Game Creator"
                  ? "chess"
                  : item.title === "Halloween"
                  ? "halloween"
                  : item.title === "Critters' Breakout!"
                  ? "critters"
                  : undefined
              }
            >
              <img
                className="ourwork__card-image"
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
            </article>
          );
        })}
      </div>

      <div className="ourwork__partners reveal-on-scroll reveal-up">
        {partnerLogos.map((logo) => (
          <div className="ourwork__partner" key={logo.name}>
            <img
              src={logo.image}
              alt={logo.name}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      </main>
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default OurWork;
