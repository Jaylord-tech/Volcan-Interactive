import Blog from "../Blog/Blog.jsx";
import "./UnitedState.css";

function UnitedState() {
  const unitedStateGalleryLoopImages = [
    "/Volcan-Interactive/assests/unitedBackround.png",
  ];
  const unitedStateCopy = [
    "Full case studies are currently in production. In the meantime, selected work is available on request.",
  ];

  return (
    <Blog
      sectionId="unitedstate"
      heroImage="/Volcan-Interactive/assests/unitedBackround.png"
      titleImage="/Volcan-Interactive/assests/unitedText.png"
      galleryImage="/Volcan-Interactive/assests/unitedBackround.png"
      titleAlt="United State"
      mainAlt="United State artwork"
      galleryAlt="United State project cover"
      titleSubtext="COMING SOON..."
      titleSubtextClassName="united-state__coming-soon"
      titleSubtextPlacement="between"
      copyParagraphs={unitedStateCopy}
      showMainVisual={false}
      galleryThumbs={[]}
      galleryLoopImages={unitedStateGalleryLoopImages}
    />
  );
}

export default UnitedState;
