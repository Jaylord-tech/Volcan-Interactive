import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Blog.css";

const defaultCopyParagraphs = [
  "Designed and built theme-based UI architectures in Unreal Engine that allowed designers to switch between multiple interface styles without touching Blueprints. This enabled faster iteration, improved accessibility for non-technical designers, and ensured visual consistency across different game themes.",
  "This approach accelerated iteration, expanded accessibility for non-technical team members, and preserved visual consistency across diverse game themes. Through optimized UI logic and structured workflows, the system reduced implementation friction and empowered designers to prototype and refine interfaces efficiently, supporting accelerated production timelines and elevated gameplay quality.",
];

const defaultGalleryThumbs = [
  {
    className: "blog__thumb blog__thumb--4 reveal-on-scroll reveal-left reveal-delay-3",
    src: "/Volcan-Interactive/assests/blogImg4.png",
    alt: "Halloween character 4",
  },
  {
    className: "blog__thumb blog__thumb--3 reveal-on-scroll reveal-left reveal-delay-2",
    src: "/Volcan-Interactive/assests/blogImg3.png",
    alt: "Halloween character 3",
  },
  {
    className: "blog__thumb blog__thumb--2 reveal-on-scroll reveal-left reveal-delay-1",
    src: "/Volcan-Interactive/assests/blogImg2.png",
    alt: "Halloween character 2",
  },
  {
    className: "blog__thumb blog__thumb--1 reveal-on-scroll reveal-left",
    src: "/Volcan-Interactive/assests/blogImg1.png",
    alt: "Halloween character 1",
  },
];

function Blog({
  sectionId = "halloween",
  heroImage = "/Volcan-Interactive/assests/blogBackground.png",
  heroImageMobile = "",
  titleImage = "/Volcan-Interactive/assests/halloweenText.png",
  titleText = "",
  titleTextClassName = "",
  titleSubtext = "",
  titleSubtextClassName = "",
  titleSubtextPlacement = "inline",
  mainImage = "/Volcan-Interactive/assests/blogMain.png",
  galleryImage = "/Volcan-Interactive/assests/blogBackground.png",
  galleryImageMobile = "",
  titleAlt = "Halloween",
  mainAlt = "Halloween main piece",
  galleryAlt = "Halloween project cover",
  copyParagraphs = defaultCopyParagraphs,
  galleryThumbs = defaultGalleryThumbs,
  galleryLoopImages = [],
  showMainVisual = true,
  collapseContentWhenNoMainVisual = true,
  showGalleryLeft = true,
  galleryInfoText = "Learn more about our services and how we support studios",
  showGalleryCta = true,
  galleryCtaLabel = "Watch Now",
}) {
  const sectionRef = useRef(null);
  const { hash } = useLocation();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [galleryNoTransition, setGalleryNoTransition] = useState(false);

  const gallerySlides = useMemo(() => {
    const sourceImages = galleryLoopImages.length
      ? galleryLoopImages
      : [{ src: galleryImage, srcMobile: galleryImageMobile }];
    return sourceImages.map((item, index) =>
      typeof item === "string"
        ? { src: item, srcMobile: "", alt: `${galleryAlt} ${index + 1}` }
        : {
            src: item.src,
            srcMobile: item.srcMobile || "",
            alt: item.alt || `${galleryAlt} ${index + 1}`,
          }
    );
  }, [galleryLoopImages, galleryImage, galleryImageMobile, galleryAlt]);

  const galleryLoopSlides = useMemo(() => {
    if (gallerySlides.length <= 1) return gallerySlides;
    return [...gallerySlides, gallerySlides[0]];
  }, [gallerySlides]);

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
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;
    const nav = document.querySelector(".hero__nav");
    const navOffset = nav ? nav.getBoundingClientRect().height + 16 : 80;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), left: 0, behavior: "smooth" });
  }, [hash]);

  useEffect(() => {
    setGalleryNoTransition(false);
    setActiveGalleryIndex(0);
  }, [gallerySlides.length, sectionId]);

  useEffect(() => {
    if (gallerySlides.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveGalleryIndex((prev) => {
        if (prev >= gallerySlides.length) return prev;
        return prev + 1;
      });
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [gallerySlides.length]);

  useEffect(() => {
    if (gallerySlides.length <= 1) return;
    if (activeGalleryIndex !== gallerySlides.length) return;

    // Fallback reset for browsers/tabs where transitionend may not fire
    const fallbackId = window.setTimeout(() => {
      setGalleryNoTransition(true);
      setActiveGalleryIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setGalleryNoTransition(false);
        });
      });
    }, 750);

    return () => window.clearTimeout(fallbackId);
  }, [activeGalleryIndex, gallerySlides.length]);

  const handleGalleryTransitionEnd = () => {
    if (gallerySlides.length <= 1) return;
    if (activeGalleryIndex !== gallerySlides.length) return;

    setGalleryNoTransition(true);
    setActiveGalleryIndex(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setGalleryNoTransition(false);
      });
    });
  };

  return (
    <div className="page">
      <Navbar hideBottomLine />
      <main ref={sectionRef} className="blog">
        <section className="blog__hero reveal reveal-up">
          <picture className="blog__hero-image-wrap">
            {heroImageMobile ? (
              <source media="(max-width: 960px)" srcSet={heroImageMobile} type="image/webp" />
            ) : null}
            <img
              className="blog__hero-image"
              src={heroImage}
              alt={galleryAlt}
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </picture>
          <img
            className="blog__hero-design"
            src="/Volcan-Interactive/assests/blogDesign1.png"
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
          <img
            className="blog__hero-design-bottom"
            src="/Volcan-Interactive/assests/blogDesign2.png"
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
          />
        </section>

        <section
          className={`blog__content${
            !showMainVisual && collapseContentWhenNoMainVisual ? " blog__content--single" : ""
          }`}
          id={sectionId}
        >
          <div className="blog__copy">
            {titleText ? (
              <p
                className={`blog__title-text reveal-on-scroll reveal-left ${titleTextClassName}`.trim()}
              >
                {titleText}
              </p>
            ) : (
              <img
                className="blog__title-image reveal-on-scroll reveal-left"
                src={titleImage}
                alt={titleAlt}
                loading="lazy"
                decoding="async"
              />
            )}
            {copyParagraphs.map((paragraph, index) => (
              <p className="reveal-on-scroll reveal-left" key={`${sectionId}-copy-${index}`}>
                {paragraph}
              </p>
            ))}
            {titleSubtext && titleSubtextPlacement === "inline" ? (
              <p
                className={`blog__title-subtext reveal-on-scroll reveal-left ${titleSubtextClassName}`.trim()}
              >
                {titleSubtext}
              </p>
            ) : null}
          </div>

          {showMainVisual ? (
            <div className="blog__main-visual">
              <img
                className="reveal-on-scroll reveal-right"
                src={mainImage}
                alt={mainAlt}
                loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}

        </section>

        {titleSubtext && titleSubtextPlacement === "between" ? (
          <div className="blog__title-subtext-wrap reveal-on-scroll reveal-up">
            <p
              className={`blog__title-subtext blog__title-subtext--between ${titleSubtextClassName}`.trim()}
            >
              {titleSubtext}
            </p>
          </div>
        ) : null}

        <section className={`blog__gallery${showGalleryLeft ? "" : " blog__gallery--single"}`}>
          {showGalleryLeft ? (
            <div className="blog__gallery-left">
              {galleryThumbs.length ? (
                <div className="blog__thumbs">
                  {galleryThumbs.map((thumb, index) => (
                    <img
                      className={thumb.className}
                      src={thumb.src}
                      alt={thumb.alt}
                      loading="lazy"
                      decoding="async"
                      key={`${sectionId}-thumb-${index}`}
                    />
                  ))}
                </div>
              ) : null}
              {galleryInfoText ? <p className="reveal-on-scroll reveal-left">{galleryInfoText}</p> : null}
              {showGalleryCta ? (
                <button className="blog__cta reveal-on-scroll reveal-left" type="button">
                  <span>{galleryCtaLabel}</span>
                </button>
              ) : null}
            </div>
          ) : null}

          <div className="blog__gallery-right reveal-on-scroll reveal-right">
            <div
              className={`blog__gallery-slider${galleryNoTransition ? " no-transition" : ""}`}
              onTransitionEnd={handleGalleryTransitionEnd}
              style={{
                transform: `translateX(-${activeGalleryIndex * 100}%)`,
              }}
            >
              {galleryLoopSlides.map((slide, index) => (
                <div className="blog__gallery-slide" key={`${sectionId}-slide-${index}`}>
                  <picture>
                    {slide.srcMobile ? (
                      <source media="(max-width: 960px)" srcSet={slide.srcMobile} type="image/webp" />
                    ) : null}
                    <img src={slide.src} alt={slide.alt} loading="lazy" decoding="async" />
                  </picture>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
