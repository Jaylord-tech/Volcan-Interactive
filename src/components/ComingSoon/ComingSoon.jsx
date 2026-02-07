import { useEffect, useRef } from "react";
import "./ComingSoon.css";

function ComingSoon() {
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
    <section ref={sectionRef} className="coming-soon">
      <div className="coming-soon__frame">
        <div className="coming-soon__content reveal-on-scroll reveal-left">
          <p className="coming-soon__eyebrow">Project Is</p>
          <h2>Coming Soon!</h2>
          <p>
            Full case studies are currently in production.
            <br />
            In the meantime, selected work is available on request.
          </p>
        </div>
        <img
          className="coming-soon__side"
          src="/src/assests/comingSoonSideImg.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <img
          className="coming-soon__hero reveal-on-scroll reveal-right"
          src="/src/assests/comingSoonImg.png"
          alt="Coming soon ornament"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default ComingSoon;
