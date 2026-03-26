import Blog from "../Blog/Blog.jsx";
import "./UnitedState.css";

function UnitedState() {
  const unitedStateGalleryLoopImages = [
    {
      src: "/assests/unitedBackround.webp",
      srcMobile: "/assests/unitedBackround-mobile.webp",
    },
  ];
  const unitedStateCopy = [
    "Full case studies are currently in production. In the meantime, selected work is available on request.",
  ];

  return (
    <Blog
      sectionId="unitedstate"
      heroImage="/assests/unitedBackround.webp"
      heroImageMobile="/assests/unitedBackround-mobile.webp"
      titleImage="/assests/unitedText.webp"
      galleryImage="/assests/unitedBackround.webp"
      galleryImageMobile="/assests/unitedBackround-mobile.webp"
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
