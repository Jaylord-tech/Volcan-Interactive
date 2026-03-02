import Blog from "../Blog/Blog.jsx";
import "./Critters.css";

function Critters() {
  const crittersCopy = [
    "Designed and implemented player-centric game UI/UX for a multiplayer title across PC and mobile platforms, ensuring scalable, cross-platform consistency and usability. Created high fidelity interface assets and interaction systems in Figma, and implemented them in Unreal Engine using Common UI and Blueprint. Built modular, reusable UI components and structured navigation flows to support multiplayer states and responsive layouts. Collaborated closely with programmers and artists to deliver polished, production ready UI that enhanced gameplay clarity, player engagement, and development efficiency.",
  ];
  const crittersGalleryLoopImages = [
    {
      src: "/Volcan-Interactive/assests/crittersBackground.webp",
      srcMobile: "/Volcan-Interactive/assests/crittersBackground-mobile.webp",
    },
    {
      src: "/Volcan-Interactive/assests/critters1.webp",
      srcMobile: "/Volcan-Interactive/assests/critters1-mobile.webp",
    },
    {
      src: "/Volcan-Interactive/assests/critters2.webp",
      srcMobile: "/Volcan-Interactive/assests/critters2-mobile.webp",
    },
    {
      src: "/Volcan-Interactive/assests/critters3.webp",
      srcMobile: "/Volcan-Interactive/assests/critters3-mobile.webp",
    },
    {
      src: "/Volcan-Interactive/assests/critters4.webp",
      srcMobile: "/Volcan-Interactive/assests/critters4-mobile.webp",
    },
  ];

  return (
    <Blog
      sectionId="critters"
      heroImage="/Volcan-Interactive/assests/crittersBackground.webp"
      heroImageMobile="/Volcan-Interactive/assests/crittersBackground-mobile.webp"
      titleImage="/Volcan-Interactive/assests/crittersTextImg.webp"
      mainImage="/Volcan-Interactive/assests/Rabbit.webp"
      galleryImage="/Volcan-Interactive/assests/crittersBackground.webp"
      galleryImageMobile="/Volcan-Interactive/assests/crittersBackground-mobile.webp"
      titleAlt="Critters Breakout"
      mainAlt="Critters rabbit character"
      galleryAlt="Critters project cover"
      copyParagraphs={crittersCopy}
      galleryLoopImages={crittersGalleryLoopImages}
    />
  );
}

export default Critters;
