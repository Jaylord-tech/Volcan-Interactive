import { useEffect, useRef, useState } from "react";
import "./GetInTouch.css";

function GetInTouch() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [textRevealed, setTextRevealed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const returnUrl =
    typeof window !== "undefined"
      ? (() => {
          const nextUrl = new URL(window.location.href);
          nextUrl.searchParams.set("contactSuccess", "1");
          nextUrl.hash = "contact";
          return nextUrl.toString();
        })()
      : "";

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
    if (typeof window === "undefined") return;

    const currentUrl = new URL(window.location.href);
    if (currentUrl.searchParams.get("contactSuccess") !== "1") return;

    setShowSuccessMessage(true);
    setTextRevealed(true);
    currentUrl.searchParams.delete("contactSuccess");
    window.history.replaceState({}, "", `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`);
  }, []);

  useEffect(() => {
    if (!showSuccessMessage) return;

    const timeoutId = window.setTimeout(() => {
      setShowSuccessMessage(false);
    }, 4500);

    return () => window.clearTimeout(timeoutId);
  }, [showSuccessMessage]);

  const handleEnterSubmit = (event) => {
    if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) {
      return;
    }

    event.preventDefault();
    formRef.current?.requestSubmit();
  };

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
          style={{ backgroundImage: "url(/Volcan-Interactive/assests/getInTouch.webp)" }}
          aria-hidden="true"
        />

        <form
          ref={formRef}
          className="contact__form reveal-on-scroll reveal-right"
          action="https://formsubmit.co/info@volcaninteractive.com"
          method="POST"
          onSubmit={() => setTextRevealed(true)}
          onKeyDown={handleEnterSubmit}
        >
          <input type="hidden" name="_subject" value="New Volcan Interactive enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={returnUrl} />
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="info@volcaninteractive.com"
              autoComplete="email"
              required
            />
          </label>
          <label>
            Name
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>
          <label>
            Company
            <input
              type="text"
              name="company"
              autoComplete="organization"
            />
          </label>
          <label>
            Message
            <textarea
              rows="3"
              name="message"
              required
            />
          </label>
          <button className="contact__submit" type="submit">
            <span>Submit</span>
          </button>
        </form>
      </div>

      {showSuccessMessage ? (
        <div className="contact__success" role="status" aria-live="polite">
          <span className="contact__success-title">Success</span>
          <span className="contact__success-text">
            Message sent successfully.
          </span>
          <button
            className="contact__success-close"
            type="button"
            onClick={() => setShowSuccessMessage(false)}
            aria-label="Dismiss notification"
          >
            x
          </button>
        </div>
      ) : null}

      <p className={`contact__note reveal-on-scroll${textRevealed ? " is-visible" : ""}`}>
        Trust us to craft high performance game interfaces that captivate players
      </p>
    </section>
  );
}

export default GetInTouch;
