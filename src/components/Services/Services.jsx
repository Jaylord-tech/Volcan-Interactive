import { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import GetInTouch from "../GetInTouch/GetInTouch.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Services.css";

const serviceCategories = [
  "Game UI",
  "Engine Implementation",
  "Motion", "Animation",
  "Consultancy",
];

const services = [
  {
    title: "Game UI/UX Design",
    video: "/Volcan-Interactive/assests/service1.mp4",
    poster: "/Volcan-Interactive/assests/service1.webp",
    copy: "We design clear, intuitive, and visually consistent game interfaces that enhance player experience and support gameplay. This includes menus, HUDs, overlays, and settings screens, all crafted to communicate information effectively while matching your game’s style and tone. Our focus is on usability, accessibility, and player flow, making sure the UI feels natural to use and never gets in the way of the game.",
  },
  {
    title: "Game Engine UI Implementation",
    video: "/Volcan-Interactive/assests/service2.mp4",
    poster: "/Volcan-Interactive/assests/service2.webp",
    copy: "We implement UI systems directly inside Unreal Engine using UMG, Common UI, and Blueprint integration. Our approach ensures that designs translate accurately into functional, scalable, and maintainable UI systems. We build interfaces that work seamlessly across input types, resolutions, and platforms, and that integrate cleanly with gameplay logic and data.",
  },
  {
    title: "Design Motion & VFX",
    video: "/Volcan-Interactive/assests/service3.mp4",
    poster: "/Volcan-Interactive/assests/service3.webp",
    copy: "We enhance interfaces with motion, transitions, and visual feedback that make interactions feel responsive and engaging. From subtle animations to expressive feedback moments, motion is used to guide player attention, reinforce actions, and add a layer of polish that elevates the overall experience without overwhelming the user.",
  },
  {
    title: "UI Optimization and Consultancy",
    video: "/Volcan-Interactive/assests/service4.mp4",
    poster: "/Volcan-Interactive/assests/service4.webp",
    copy: "We review, refine, and optimize existing interfaces to improve usability, visual clarity, and performance. This includes identifying UX issues, simplifying complex flows, reducing visual clutter, and optimizing for real-time performance. Whether it’s a light polish or a full UI pass, we help bring your interface up to production quality.",
  },
];

function Services() {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

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
    const videos = videoRefs.current.filter(Boolean);
    if (!videos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Navbar />
      <main ref={sectionRef} className="services-page">
        <section className="services-page__hero">
          <div className="services-page__overlay">
            <p className="services-page__eyebrow reveal-on-scroll">We Offer</p>
            <h1 className="reveal-on-scroll reveal-delay-1">
              Game <span className="services-page__highlight">UI/UX</span> Design and{" "}
              <br />
              <span className="services-page__highlight">Implementation</span>
            </h1>
            <p className="reveal-on-scroll reveal-delay-2">
              <span className="services-page__hero-line">
                We provide end to end Game UI/UX design and implementation services tailored for real time interactive experiences. From early
              </span>
              <span className="services-page__hero-line">
                concepts to final in engine delivery, we work closely with studios to create intuitive, performance focused interfaces that support
              </span>
              <span className="services-page__hero-line">
                gameplay, storytelling, and player immersion.
              </span>
            </p>
            <p className="reveal-on-scroll reveal-delay-3">
              <span className="services-page__hero-line services-page__hero-line--no-wrap">
                Our process bridges visual design and technical execution, ensuring every interface is not only visually refined but also optimized for real
              </span>
              <span className="services-page__hero-line">
                world production constraints. By integrating seamlessly into existing development pipelines, we help teams ship polished, scalable UI
              </span>
              <span className="services-page__hero-line">
                systems without slowing down production or compromising quality.
              </span>
            </p>
          </div>
        </section>

        <div className="services-page__hero-tail">
          <div className="services-page__tail-overlay">
            <section className="services-page__categories reveal-on-scroll">
              {serviceCategories.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </section>
          </div>
        </div>

        <section className="services-page__details">
          {services.map((service, index) => (
            <article
              className={`services-page__detail${index % 2 === 1 ? " is-reverse" : ""}`}
              key={service.title}
            >
              <div
                className={`services-page__detail-copy reveal-on-scroll ${
                  index % 2 === 1 ? "reveal-right" : "reveal-left"
                }`}
              >
                <h2>{service.title}</h2>
                <p>{service.copy}</p>
              </div>
              <figure
                className={`services-page__detail-image reveal-on-scroll ${
                  index % 2 === 1 ? "reveal-left" : "reveal-right"
                }`}
              >
                <video
                  src={service.video}
                  poster={service.poster}
                  title={service.title}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                />
              </figure>
            </article>
          ))}
        </section>

        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}

export default Services;
