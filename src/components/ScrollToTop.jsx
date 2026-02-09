import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getContactOffset, scrollToContact } from "../utils/scrollToContact.js";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      let attempts = 0;
      const tryScroll = () => {
        const target = document.querySelector(hash);
        if (target) {
          if (hash === "#contact") {
            scrollToContact({ offset: getContactOffset(pathname) });
            return;
          }
          const targetTop = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: Math.max(targetTop, 0), left: 0, behavior: "smooth" });
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
