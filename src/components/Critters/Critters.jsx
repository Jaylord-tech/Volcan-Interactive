import Blog from "../Blog/Blog.jsx";
import "./Critters.css";

function Critters() {
  const crittersCopy = [
    "Designed and implemented player-centric game UI/UX for a multiplayer title across PC and mobile platforms, ensuring scalable, cross-platform consistency and usability. Created high fidelity interface assets and interaction systems in Figma, and implemented them in Unreal Engine using Common UI and Blueprint. Built modular, reusable UI components and structured navigation flows to support multiplayer states and responsive layouts. Collaborated closely with programmers and artists to deliver polished, production ready UI that enhanced gameplay clarity, player engagement, and development efficiency.",
  ];
  const crittersGalleryLoopImages = [
    "/Volcan-Interactive/assests/crittersBackground.png",
    "/Volcan-Interactive/assests/critters1.png",
    "/Volcan-Interactive/assests/critters2.png",
    "/Volcan-Interactive/assests/critters3.png",
    "/Volcan-Interactive/assests/critters4.png",
  ];

  return (
    <Blog
      sectionId="critters"
      heroImage="/Volcan-Interactive/assests/crittersBackground.png"
      titleImage="/Volcan-Interactive/assests/crittersTextImg.png"
      mainImage="/Volcan-Interactive/assests/Rabbit.png"
      galleryImage="/Volcan-Interactive/assests/crittersBackground.png"
      titleAlt="Critters Breakout"
      mainAlt="Critters rabbit character"
      galleryAlt="Critters project cover"
      copyParagraphs={crittersCopy}
      galleryLoopImages={crittersGalleryLoopImages}
    />
  );
}

export default Critters;
