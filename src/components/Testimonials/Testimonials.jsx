import { useEffect, useRef } from "react";
import "./Testimonials.css";

function Testimonials() {
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
    <section ref={sectionRef} className="testimonials">
      <p className="testimonials__eyebrow reveal-on-scroll">We Always Deliver</p>
      <h2 className="reveal-on-scroll">What Are Our Partners Saying</h2>

      <div className="testimonials__card">
        <div className="testimonials__copy">
          <p className="reveal-on-scroll">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit.
          </p>
          <span className="testimonials__tag reveal-on-scroll">Chess Game Creator</span>
        </div>
        <div className="testimonials__image reveal-on-scroll reveal-right">
          <img
            src="/Volcan-Interactive/assests/grave.png"
            alt="Grave ornament"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="testimonials__dots">
          <span />
          <span />
          <span className="is-active" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
