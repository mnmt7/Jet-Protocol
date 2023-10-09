import Nav from "@/components/Nav";
import Cta from "@/components/Cta";
import ImageScroller from "@/components/ImageScroller";

const page = () => {
  return (
    <>
      <Nav />
      <Cta />
      <ImageScroller
        images={[
          "image 18.png",
          "image 19.png",
          "image 20.png",
          "image 21.png",
          "image 22.png",
          "image 23.png",
          "image 24.png",
          "image 25.png",
          "image 26.png",
          "image 18.png",
          "image 19.png",
          "image 20.png",
          "image 21.png",
          "image 22.png",
          "image 23.png",
          "image 24.png",
          "image 25.png",
          "image 26.png",
        ]}
      />
    </>
  );
};

export default page;
