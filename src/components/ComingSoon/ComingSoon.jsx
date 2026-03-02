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
      <div className="coming-soon__frame" />
      <div className="coming-soon__content reveal-on-scroll">
        <h2>COMING SOON!</h2>
        <p>
          Full case studies are currently in production. In the meantime, selected work is available on request.
        </p>
      </div>
    </section>
  );
}

export default ComingSoon;
