import { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./About.css";

const partnerLogos = [
  { name: "Figma", image: "/Volcan-Interactive/assests/figma.webp" },
  { name: "Unreal", image: "/Volcan-Interactive/assests/unreal.webp" },
  { name: "Rive", image: "/Volcan-Interactive/assests/rive.webp" },
  { name: "Unity", image: "/Volcan-Interactive/assests/unity.webp" },
  { name: "Photoshop", image: "/Volcan-Interactive/assests/ps.webp" },
];

function About() {
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
    <div className="page">
      <Navbar />
      <main ref={sectionRef} className="about">
        <section className="about__intro">
          <div className="about__intro-inner">
            <p className="about__eyebrow reveal-on-scroll">About</p>
            <h1 className="reveal-on-scroll reveal-delay-1">
              <span className="about__title-line">Volcan Interactive</span>
              <span className="about__title-line">Studios</span>
            </h1>
            <p className="about__intro-copy reveal-on-scroll reveal-delay-2">
              <span className="about__intro-line">
                Volcan Interactive is Africa&apos;s first real time Game UI/UX
                co-development studio, delivering global standard design and
                implementation for
              </span>
              <span className="about__intro-line about__intro-line--center">
                games and interactive experiences, it is a game real time interface
                design studio based in Nigeria.
              </span>
              <span className="about__intro-line">
                We specialize in crafting intuitive, performance focused interfaces
                for games and interactive experiences, bridging the gap between
              </span>
              <span className="about__intro-line">
                visual design and technical implementation in Unreal Engine.
              </span>
            </p>
          </div>
        </section>

        <section className="about__partners">
          {partnerLogos.map((logo) => (
            <div className="about__partner" key={logo.name}>
              <img
                src={logo.image}
                alt={logo.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </section>

        <section className="about__story">
          <img
            className="about__decor about__decor--1"
            src="/Volcan-Interactive/assests/backDesign1.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <img
            className="about__decor about__decor--2"
            src="/Volcan-Interactive/assests/backDesign2.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <img
            className="about__decor about__decor--3"
            src="/Volcan-Interactive/assests/backDesign3.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <img
            className="about__decor about__decor--4"
            src="/Volcan-Interactive/assests/backDesign4.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <img
            className="about__decor about__decor--5"
            src="/Volcan-Interactive/assests/backDesign5.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <img
            className="about__decor about__decor--6"
            src="/Volcan-Interactive/assests/backDesign6.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <img
            className="about__decor about__decor--7"
            src="/Volcan-Interactive/assests/backDesign2.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          <div className="about__story-head">
            <p className="about__eyebrow about__story-eyebrow reveal-on-scroll">
              Our Story
            </p>
            <h2 className="about__story-title reveal-on-scroll reveal-delay-1">
              Pain Point
            </h2>
            <p className="reveal-on-scroll reveal-delay-2">
              From my experience in the African game industry, I&apos;ve observed a
              recurring challenge: most studios struggle to achieve the standard of
              UI/UX seen in global games. The reason is simple: there are very few
              experienced UI/UX specialists across Africa, and the few available
              are often beyond the reach of studios&apos; budgets.
            </p>
            <p className="reveal-on-scroll reveal-delay-3">
              When I joined Dimension11 Studio I had zero prior industry
              experience. I quickly saw the reality of what I was getting into:
              one UI/UX designer is often forced to wear many hats, from
              designing in Figma, to creating icons, and down to implementing
              directly in Unreal Engine. While this built resilience and broadened
              my skills, it also limited creativity and slowed down the process.
              This opened my eyes to a bigger truth: many studios across Africa
              are facing the same problem.
            </p>
            <p className="reveal-on-scroll reveal-delay-4">
              That&apos;s why we founded Volcan Interactive Studio, a co-production
              partner dedicated to solving this challenge. At Volcan, we don&apos;t
              just make interfaces, we craft immersive player experiences by
              combining design expertise with hands-on Unreal Engine
              implementation. We provide studios with the dedicated UI/UX support
              they need to deliver games at AAA standards, without burning out
              their teams or compromising on quality.
            </p>
            <p className="about__founder reveal-on-scroll reveal-right reveal-delay-4">
              Busayo Ayodele
              <br />
              <span>Founder Volcan Interactive</span>
            </p>
          </div>

          <div className="about__story-grid">
            <article>
              <p className="about__eyebrow reveal-on-scroll reveal-left">What We See</p>
              <h3 className="reveal-on-scroll reveal-left reveal-delay-1">Our Vision</h3>
              <p className="about__vision-copy reveal-on-scroll reveal-left reveal-delay-2">
                To be Africa&apos;s leading real time interface design studio,
                empowering developers worldwide to deliver immersive and seamless
                player experiences.
              </p>
            </article>
            <article>
              <p className="about__eyebrow reveal-on-scroll reveal-right reveal-slow">
                What We Came To Do
              </p>
              <h3 className="reveal-on-scroll reveal-right reveal-slow reveal-delay-1">Our Mission</h3>
              <p className="about__mission-copy reveal-on-scroll reveal-right reveal-slow reveal-delay-2">
                We partner with studios and creators to design, prototype, and
                implement high quality game UI/UX that elevates gameplay, supports
                storytelling, and enhances performance.
              </p>
            </article>
          </div>
        </section>

        <section className="about__join">
          <p className="about__eyebrow reveal-on-scroll">Come</p>
          <h2 className="reveal-on-scroll reveal-delay-1">Join Us</h2>
          <p className="reveal-on-scroll reveal-delay-2">
            We&apos;re looking for talented designers and developers ready to
            craft high-performance, immersive game interfaces. At Volcan
            Interactive, your skills will shape games played across Africa and
            beyond.
          </p>
          <a
            className="about__cta reveal-on-scroll reveal-delay-3"
            href="mailto:info@volcaninteractive.com"
          >
            <span>Email Us</span>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
