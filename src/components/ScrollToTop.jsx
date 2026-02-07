import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const contactOffset = 320;

  useEffect(() => {
    if (hash) {
      let attempts = 0;
      const tryScroll = () => {
        const target = document.querySelector(hash);
        if (target) {
          const targetTop = target.getBoundingClientRect().top + window.scrollY;
          const offset = hash === "#contact" ? contactOffset : 0;
          window.scrollTo({ top: Math.max(targetTop - offset, 0), left: 0, behavior: "smooth" });
          return;
        }
        attempts += 1;
        if (attempts < 20) {
          setTimeout(tryScroll, 50);
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      };
      tryScroll();
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
