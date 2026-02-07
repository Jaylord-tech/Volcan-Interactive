import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ hideBottomLine = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollYRef = useRef(0);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const getScrollY = () =>
      window.pageYOffset || document.documentElement.scrollTop || 0;
    lastScrollYRef.current = getScrollY();

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = getScrollY();
        const delta = currentY - lastScrollYRef.current;
        if (delta > 0) {
          setShowNav(false);
        } else if (delta < 0) {
          setShowNav(true);
        } else if (currentY <= 4) {
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
  }, []);

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

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    const offset = pathname === "/" ? 260 : 320;
    setIsMenuOpen(false);
    if (contactSection) {
      const targetTop = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(targetTop - offset, 0),
        left: 0,
        behavior: "smooth",
      });
    } else {
      navigate({ pathname: "/", hash: "#contact" });
    }
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
              src="/src/assests/logo.png"
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
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
              News
            </NavLink>
          </nav>
          <button
            className={`hero__toggle${isMenuOpen ? " is-open" : ""}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
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
      <div className={`hero__mobile-menu${isMenuOpen ? " is-open" : ""}`}>
        <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/ourwork" onClick={() => setIsMenuOpen(false)}>
          Our Works
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>
          News
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
