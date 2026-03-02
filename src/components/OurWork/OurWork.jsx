import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./OurWork.css";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import GetInTouch from "../GetInTouch/GetInTouch.jsx";

const showcaseItems = [
  {
    title: "Chess Game Creator",
    image: "/Volcan-Interactive/assests/chess.png",
  },
  {
    title: "Halloween",
    image: "/Volcan-Interactive/assests/halloween.png",
  },
  {
    title: "Critters' Breakout!",
    image: "/Volcan-Interactive/assests/critters.png",
    isWide: false,
  },
  {
    title: "United State",
    image: "/Volcan-Interactive/assests/unitedState.png",
  },
];

const partnerLogos = [
  { name: "Figma", image: "/Volcan-Interactive/assests/figma.png" },
  { name: "Unreal", image: "/Volcan-Interactive/assests/unreal.png" },
  { name: "Rive", image: "/Volcan-Interactive/assests/rive.png" },
  { name: "Unity", image: "/Volcan-Interactive/assests/unity.png" },
  { name: "Photoshop", image: "/Volcan-Interactive/assests/ps.png" },
];

function OurWork() {
  const navigate = useNavigate();
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
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
            <button type="button" className="is-active">All</button>
            <button type="button">PC</button>
            <button type="button">Console</button>
            <button type="button">Mobile</button>
            <button type="button">Web3</button>
          </div>
        </div>

        <div className="ourwork__grid">
        {showcaseItems.map((item, index) => {
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
