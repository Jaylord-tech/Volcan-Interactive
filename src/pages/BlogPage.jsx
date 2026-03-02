import Blog from "../components/Blog/Blog.jsx";

function BlogPage() {
  const blogGalleryLoopImages = [
    "/Volcan-Interactive/assests/blogBackground.png",
    "/Volcan-Interactive/assests/halloween1.png",
    "/Volcan-Interactive/assests/halloween2.png",
    "/Volcan-Interactive/assests/halloween3.png",
    "/Volcan-Interactive/assests/halloween4.png",
  ];

  return <Blog galleryLoopImages={blogGalleryLoopImages} />;
}

export default BlogPage;
