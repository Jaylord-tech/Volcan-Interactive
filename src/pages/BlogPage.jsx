import Blog from "../components/Blog/Blog.jsx";

function BlogPage() {
  const blogGalleryLoopImages = [
    {
      src: "/assests/blogBackground.webp",
      srcMobile: "/assests/blogBackground-mobile.webp",
    },
    {
      src: "/assests/halloween1.webp",
      srcMobile: "/assests/halloween1-mobile.webp",
    },
    {
      src: "/assests/halloween2.webp",
      srcMobile: "/assests/halloween2-mobile.webp",
    },
    {
      src: "/assests/halloween3.webp",
      srcMobile: "/assests/halloween3-mobile.webp",
    },
    {
      src: "/assests/halloween4.webp",
      srcMobile: "/assests/halloween4-mobile.webp",
    },
  ];

  return (
    <Blog
      heroImageMobile="/assests/blogBackground-mobile.webp"
      galleryLoopImages={blogGalleryLoopImages}
    />
  );
}

export default BlogPage;
