import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Blog.css";

function Blog() {
  const sectionRef = useRef(null);
  const [mainRevealed, setMainRevealed] = useState(false);
  const { hash } = useLocation();

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
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;
    const nav = document.querySelector(".hero__nav");
    const navOffset = nav ? nav.getBoundingClientRect().height + 16 : 80;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), left: 0, behavior: "smooth" });
  }, [hash]);

  return (
    <div className="page">
      <Navbar hideBottomLine />
      <main ref={sectionRef} className="blog">
        <section className="blog__hero reveal reveal-up">
          <img
            className="blog__hero-image"
            src="/assests/blogBackground.png"
            alt="Halloween chess game creator"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <img
            className="blog__hero-design"
            src="/assests/blogDesign1.png"
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
          <img
            className="blog__hero-design-bottom"
            src="/assests/blogDesign2.png"
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
        </section>

        <section className="blog__content" id="halloween">
          <div className="blog__copy">
            <img
              className="blog__title-image reveal-on-scroll reveal-left"
              src="/assests/halloweenText.png"
              alt="Halloween"
              loading="lazy"
              decoding="async"
            />
            <p className="reveal-on-scroll reveal-left">
              We developed a modular system in Unreal Engine that allows designers
              to create and edit chess games without requiring expertise in Unreal
              Motion Graphics. Our focus was on building a themed UI system,
              enabling designers to switch between multiple interface styles
              seamlessly, without interacting with Blueprints.
            </p>
            <p className="reveal-on-scroll reveal-left">
              This approach accelerated iteration, improved accessibility for
              non-technical team members, and ensured visual consistency across
              different game themes. By optimizing UI logic and workflows, the
              system reduced development bottlenecks and empowered designers to
              prototype and polish interfaces more efficiently.
            </p>
          </div>

          <div className="blog__main-visual">
            <img
              className={`reveal-on-scroll reveal-right${
                mainRevealed ? " is-visible" : ""
              }`}
              src="/assests/blogMain.png"
              alt="Halloween main piece"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="blog__gallery">
          <div className="blog__gallery-left">
            <div className="blog__thumbs">
              <img
                className="reveal-on-scroll reveal-left reveal-delay-3"
                src="/assests/blogImg4.png"
                alt="Halloween character 4"
                loading="lazy"
                decoding="async"
              />
              <img
                className="reveal-on-scroll reveal-left reveal-delay-2"
                src="/assests/blogImg3.png"
                alt="Halloween character 3"
                loading="lazy"
                decoding="async"
              />
              <img
                className="reveal-on-scroll reveal-left reveal-delay-1"
                src="/assests/blogImg2.png"
                alt="Halloween character 2"
                loading="lazy"
                decoding="async"
              />
              <img
                className="reveal-on-scroll reveal-left"
                src="/assests/blogImg1.png"
                alt="Halloween character 1"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="reveal-on-scroll reveal-left">
              Learn more about our services and how we support studios
            </p>
            <button className="blog__cta reveal-on-scroll reveal-left" type="button">
              <span>Watch Now</span>
            </button>
          </div>

          <div className="blog__gallery-right">
            <img
              className="reveal-on-scroll reveal-right"
              src="/assests/blogBackground.png"
              alt="Halloween project cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
