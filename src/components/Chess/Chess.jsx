import Blog from "../Blog/Blog.jsx";
import "./Chess.css";

function Chess() {
  const chessCopy = [
    "Developed a modular system in Unreal Engine that allows designers to create and edit chess games without requiring expertise in Unreal Motion Graphics. Our focus was on building a theme based UI system, enabling designers to switch between multiple interface styles seamlessly, without interacting with Blueprints.",
    "This approach accelerated iteration, improved accessibility for non technical team members, and ensured visual consistency across different game themes. By optimizing UI logic and workflows, the system reduced development bottlenecks and empowered designers to prototype and polish interfaces more efficiently, supporting faster production and higher quality gameplay experiences.",
  ];

  const chessThumbs = [
    {
      className: "blog__thumb blog__thumb--4 reveal-on-scroll reveal-left reveal-delay-3",
      src: "/Volcan-Interactive/assests/chess1.png",
      alt: "Chess piece 1",
    },
    {
      className: "blog__thumb blog__thumb--3 reveal-on-scroll reveal-left reveal-delay-2",
      src: "/Volcan-Interactive/assests/chess2.png",
      alt: "Chess piece 2",
    },
    {
      className: "blog__thumb blog__thumb--2 reveal-on-scroll reveal-left reveal-delay-1",
      src: "/Volcan-Interactive/assests/chess3.png",
      alt: "Chess piece 3",
    },
    {
      className: "blog__thumb blog__thumb--1 reveal-on-scroll reveal-left",
      src: "/Volcan-Interactive/assests/chess4.png",
      alt: "Chess piece 4",
    },
  ];
  const chessGalleryLoopImages = [
    "/Volcan-Interactive/assests/chessBackground.png",
    "/Volcan-Interactive/assests/chessGame1.png",
    "/Volcan-Interactive/assests/chessGame2.png",
    "/Volcan-Interactive/assests/chessGame3.png",
    "/Volcan-Interactive/assests/chessGame4.png",
    "/Volcan-Interactive/assests/chessGame5.png",
  ];

  return (
    <Blog
      sectionId="chess"
      heroImage="/Volcan-Interactive/assests/chessBackground.png"
      titleText="CHESS GAME CREATOR"
      titleTextClassName="chess__title-text"
      mainImage="/Volcan-Interactive/assests/kingChess.png"
      galleryImage="/Volcan-Interactive/assests/chessBackground.png"
      titleAlt="Chess Game Creator"
      mainAlt="Chess king character"
      galleryAlt="Chess project cover"
      copyParagraphs={chessCopy}
      galleryThumbs={chessThumbs}
      galleryLoopImages={chessGalleryLoopImages}
    />
  );
}

export default Chess;
