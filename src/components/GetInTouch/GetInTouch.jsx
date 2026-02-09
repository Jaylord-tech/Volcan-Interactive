import { useEffect, useRef, useState } from "react";
import "./GetInTouch.css";

function GetInTouch() {
  const sectionRef = useRef(null);
  const [textRevealed, setTextRevealed] = useState(false);

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
    <section
      ref={sectionRef}
      id="contact"
      className="contact"
      onClick={() => setTextRevealed(true)}
    >
      <div className="contact__header">
        <p className={`reveal-on-scroll${textRevealed ? " is-visible" : ""}`}>
          Get in Touch
        </p>
        <h2 className={`reveal-on-scroll${textRevealed ? " is-visible" : ""}`}>
          How Can We Support Your Game?
        </h2>
      </div>

      <div className="contact__content">
        <div
          className="contact__image reveal-on-scroll reveal-left"
          style={{ backgroundImage: "url(/assests/getInTouch.png)" }}
          aria-hidden="true"
        />

        <form className="contact__form reveal-on-scroll reveal-right">
          <label>
            Email
            <input type="email" placeholder="info@volcaninteractive.com" />
          </label>
          <label>
            Name
            <input type="text" />
          </label>
          <label>
            Company
            <input type="text" />
          </label>
          <label>
            Message
            <textarea rows="3" />
          </label>
          <button className="contact__submit" type="button">
            <span>Submit</span>
          </button>
        </form>
      </div>

      <p className={`contact__note reveal-on-scroll${textRevealed ? " is-visible" : ""}`}>
        Trust us to craft high performance game interfaces that captivate players
      </p>
    </section>
  );
}

export default GetInTouch;
