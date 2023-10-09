import Nav from "@/components/Nav";
import Cta from "@/components/Cta";
import ImageScroller from "@/components/ImageScroller";
import type { Metadata } from "next";
import imageList from "@/utils/imageList";
import Info from "@/components/Info";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page for the Jet Protocol website.",
};

const Page = () => {
  return (
    <>
      <Nav />
      <Cta />
      <ImageScroller images={imageList} />
      <Info />
    </>
  );
};

export default Page;
