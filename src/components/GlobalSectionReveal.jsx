import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GlobalSectionReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    if (!sections.length) return;

    sections.forEach((section) => {
      section.classList.add("section-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default GlobalSectionReveal;
