import Blog from "../Blog/Blog.jsx";
import "./Critters.css";

function Critters() {
  const crittersCopy = [
    "Designed and implemented player-centric game UI/UX for a multiplayer title across PC and mobile platforms, ensuring scalable, cross-platform consistency and usability. Created high fidelity interface assets and interaction systems in Figma, and implemented them in Unreal Engine using Common UI and Blueprint. Built modular, reusable UI components and structured navigation flows to support multiplayer states and responsive layouts. Collaborated closely with programmers and artists to deliver polished, production ready UI that enhanced gameplay clarity, player engagement, and development efficiency.",
  ];
  const crittersThumbs = [
    {
      className: "blog__thumb blog__thumb--4 reveal-on-scroll reveal-left reveal-delay-3",
      src: "/assests/critter44.webp",
      alt: "Critters character 4",
    },
    {
      className: "blog__thumb blog__thumb--3 reveal-on-scroll reveal-left reveal-delay-2",
      src: "/assests/critter33.webp",
      alt: "Critters character 3",
    },
    {
      className: "blog__thumb blog__thumb--2 reveal-on-scroll reveal-left reveal-delay-1",
      src: "/assests/critter22.webp",
      alt: "Critters character 2",
    },
    {
      className: "blog__thumb blog__thumb--1 reveal-on-scroll reveal-left",
      src: "/assests/critter11.webp",
      alt: "Critters character 1",
    },
  ];
  const crittersGalleryLoopImages = [
    {
      src: "/assests/crittersBackground.webp",
      srcMobile: "/assests/crittersBackground-mobile.webp",
    },
    {
      src: "/assests/critters1.webp",
      srcMobile: "/assests/critters1-mobile.webp",
    },
    {
      src: "/assests/critters2.webp",
      srcMobile: "/assests/critters2-mobile.webp",
    },
    {
      src: "/assests/critters3.webp",
      srcMobile: "/assests/critters3-mobile.webp",
    },
    {
      src: "/assests/critters4.webp",
      srcMobile: "/assests/critters4-mobile.webp",
    },
  ];

  return (
    <Blog
      sectionId="critters"
      heroImage="/assests/crittersBackground.webp"
      heroImageMobile="/assests/crittersBackground-mobile.webp"
      titleImage="/assests/crittersTextImg.webp"
      mainImage="/assests/critterMain1.webp"
      galleryImage="/assests/crittersBackground.webp"
      galleryImageMobile="/assests/crittersBackground-mobile.webp"
      titleAlt="Critters Breakout"
      mainAlt="Critters main character"
      galleryAlt="Critters project cover"
      copyParagraphs={crittersCopy}
      galleryThumbs={crittersThumbs}
      galleryLoopImages={crittersGalleryLoopImages}
    />
  );
}

export default Critters;
