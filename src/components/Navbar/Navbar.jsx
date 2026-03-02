import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ hideBottomLine = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollYRef = useRef(0);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getScrollY = () =>
      window.pageYOffset || document.documentElement.scrollTop || 0;
    lastScrollYRef.current = Math.max(getScrollY(), 0);
    const SHOW_ALWAYS_THRESHOLD = 120;
    const HIDE_ONLY_AFTER = 140;

    let ticking = false;
    const handleScroll = () => {
      if (isMenuOpen) {
        setShowNav(true);
        return;
      }
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = Math.max(getScrollY(), 0);
        if (currentY <= SHOW_ALWAYS_THRESHOLD) {
          setShowNav(true);
          lastScrollYRef.current = currentY;
          ticking = false;
          return;
        }

        const delta = currentY - lastScrollYRef.current;
        if (delta > 2 && currentY > HIDE_ONLY_AFTER) {
          setShowNav(false);
        } else if (delta < -2) {
          setShowNav(true);
        }
        lastScrollYRef.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setShowNav(true);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClick = (event) => {
      if (!isMenuOpen) return;
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setShowNav(true);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const isMobileNav = window.matchMedia("(max-width: 960px)").matches;
    if (!isMobileNav) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow || "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const handleContactClick = () => {
    setIsMenuOpen(false);
    navigate("/contact");
  };

  return (
    <div ref={navRef} className="hero__nav-wrapper">
      <header
        className={`hero__nav${showNav ? " is-visible" : " is-hidden"}${
          hideBottomLine ? " no-bottom-line" : ""
        }`}
      >
        <div className="hero__nav-inner">
          <NavLink to="/" className="hero__brand">
            <img
              className="hero__brand-logo"
              src="/Volcan-Interactive/assests/logo.png"
              alt="Volcan Interactive"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
            <div className="hero__brand-text">
              <span>Volcan</span>
              <span>Interactive</span>
            </div>
          </NavLink>
          <nav className="hero__links">
            <NavLink to="/services" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
              Services
            </NavLink>
            <NavLink to="/ourwork" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
              Our Works
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
              About Us
            </NavLink>
            <NavLink to="/news" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
              News
            </NavLink>
          </nav>
          <button
            className={`hero__toggle${isMenuOpen ? " is-open" : ""}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="hero-mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="hero__actions">
            <button className="hero__cta" type="button" onClick={handleContactClick}>
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </header>
      <div
        id="hero-mobile-menu"
        className={`hero__mobile-menu${isMenuOpen ? " is-open" : ""}`}
      >
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "is-active" : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/ourwork"
          className={({ isActive }) => (isActive ? "is-active" : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          Our Works
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "is-active" : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "is-active" : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          News
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
