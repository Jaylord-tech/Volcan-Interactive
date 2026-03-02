import Blog from "../Blog/Blog.jsx";
import "./UnitedState.css";

function UnitedState() {
  const unitedStateGalleryLoopImages = [
    {
      src: "/Volcan-Interactive/assests/unitedBackround.webp",
      srcMobile: "/Volcan-Interactive/assests/unitedBackround-mobile.webp",
    },
  ];
  const unitedStateCopy = [
    "Full case studies are currently in production. In the meantime, selected work is available on request.",
  ];

  return (
    <Blog
      sectionId="unitedstate"
      heroImage="/Volcan-Interactive/assests/unitedBackround.webp"
      heroImageMobile="/Volcan-Interactive/assests/unitedBackround-mobile.webp"
      titleImage="/Volcan-Interactive/assests/unitedText.webp"
      galleryImage="/Volcan-Interactive/assests/unitedBackround.webp"
      galleryImageMobile="/Volcan-Interactive/assests/unitedBackround-mobile.webp"
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
