import Blog from "../components/Blog/Blog.jsx";

function BlogPage() {
  const blogGalleryLoopImages = [
    {
      src: "/Volcan-Interactive/assests/blogBackground.png",
      srcMobile: "/Volcan-Interactive/assests/blogBackground-mobile.webp",
    },
    {
      src: "/Volcan-Interactive/assests/halloween1.png",
      srcMobile: "/Volcan-Interactive/assests/halloween1-mobile.webp",
    },
    {
      src: "/Volcan-Interactive/assests/halloween2.png",
      srcMobile: "/Volcan-Interactive/assests/halloween2-mobile.webp",
    },
    {
      src: "/Volcan-Interactive/assests/halloween3.png",
      srcMobile: "/Volcan-Interactive/assests/halloween3-mobile.webp",
    },
    {
      src: "/Volcan-Interactive/assests/halloween4.png",
      srcMobile: "/Volcan-Interactive/assests/halloween4-mobile.webp",
    },
  ];

  return (
    <Blog
      heroImageMobile="/Volcan-Interactive/assests/blogBackground-mobile.webp"
      galleryLoopImages={blogGalleryLoopImages}
    />
  );
}

export default BlogPage;
