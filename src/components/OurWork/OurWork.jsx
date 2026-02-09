import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurWork.css";
import Footer from "../Footer/Footer.jsx";
import GetInTouch from "../GetInTouch/GetInTouch.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const showcaseItems = [
  {
    title: "Chess Game Creator",
    image: "/assests/chess.png",
  },
  {
    title: "United State",
    image: "/assests/unitedState.png",
  },
  {
    title: "Halloween",
    image: "/assests/halloween.png",
  },
  {
    title: "Critters' Breakout!",
    image: "/assests/critters.png",
    isWide: true,
  },
];

const partnerLogos = [
  { name: "Figma", image: "/assests/figma.png" },
  { name: "Unreal", image: "/assests/unreal.png" },
  { name: "Rive", image: "/assests/rive.png" },
  { name: "Unity", image: "/assests/unity.png" },
  { name: "Photoshop", image: "/assests/ps.png" },
];

function OurWork() {
  const navigate = useNavigate();

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
    if (item.title === "Halloween") {
      navigate("/blog");
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
      <main className="ourwork">
        <div className="ourwork__header">
          <p className="ourwork__eyebrow reveal reveal-up">Proof of Work</p>
        <h1 className="ourwork__title">
          <span className="reveal reveal-left reveal-delay-1">Full</span>{" "}
          <span className="reveal reveal-right reveal-delay-2">Featured</span>
        </h1>
          <div className="ourwork__filters reveal reveal-up reveal-delay-2">
            <button type="button">All</button>
            <button type="button">PC</button>
            <button type="button" className="is-active">Console</button>
            <button type="button">Mobile</button>
          </div>
        </div>

        <div className="ourwork__grid">
          {showcaseItems.map((item, index) => {
          let revealClass = "reveal-up";
          if (index === 0) revealClass = "reveal-left";
          if (index === 1) revealClass = "reveal-down";
          if (index === 2) revealClass = "reveal-right";
          if (index === 3) revealClass = "reveal-up";

          return (
            <article
              className={`ourwork__card reveal ${revealClass}${
                item.isWide ? " ourwork__card--wide" : ""
              }`}
              key={item.title}
              onMouseMove={handleCardMove}
              onMouseLeave={resetCardTilt}
              onClick={() => handleCardClick(item)}
              onKeyDown={(event) => handleCardKeyDown(event, item)}
              role={item.title === "Halloween" ? "button" : undefined}
              tabIndex={item.title === "Halloween" ? 0 : undefined}
              aria-label={item.title === "Halloween" ? "Open Halloween project" : undefined}
              data-link={item.title === "Halloween" ? "halloween" : undefined}
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

      <div className="ourwork__partners reveal reveal-up">
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

        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}

export default OurWork;
