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
      <div className="testimonials__header">
        <p className="testimonials__eyebrow reveal-on-scroll">We Always Deliver</p>
        <h2 className="reveal-on-scroll">WHAT ARE OUR PARTNERS SAYING</h2>
      </div>

      <div className="testimonials__card">
        <div className="testimonials__copy">
          <p className="reveal-on-scroll">
            Volcan Interactive&apos;s contribution to Chess Game Creator has been
            crucial in delivering a premium look and experience for its users.
            We often get asked, &ldquo;How can this plugin be free?&rdquo; and a
            big reason for that question is the presentation, which was under
            Volcan Interactive&apos;s care.
          </p>
          <p className="reveal-on-scroll">
            I cannot say enough good things about their drive toward excellence
            and strong work ethic. I&apos;m excited for more collaboration
            opportunities in the future and confidently vouch for Volcan
            Interactive&apos;s UI/UX work.
          </p>
          <span className="testimonials__tag reveal-on-scroll">
            Chess Game Creator
          </span>
        </div>
        <div className="testimonials__image reveal-on-scroll reveal-right">
          <img
            src="/assests/grave.webp"
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
