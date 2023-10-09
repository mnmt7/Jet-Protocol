"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ImageScroller = ({ images }: { images: string[] }) => {
  const [scrolling, setScrolling] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrolling) return; // stop scrolling if not scrolling
    const intervalId = setInterval(() => {
      setScrollPosition((prevScroll) => {
        const maxScroll =
          scrollerRef && scrollerRef.current
            ? scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth
            : 0;
        if (prevScroll >= maxScroll) return 0;
        return prevScroll + 1;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [scrolling]);

  useEffect(() => {
    if (scrollerRef && scrollerRef.current)
      scrollerRef.current.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  return (
    <div
      ref={scrollerRef}
      className="flex overflow-x-auto space-x-4 py-4 no-scrollbar content-center justify-center mt-20"
      onMouseEnter={() => {
        setScrolling(false);
      }}
      onMouseLeave={() => {
        setScrolling(true);
      }}
    >
      {images.map((img, index) => (
        <Image
          key={index}
          src={`/${img}`}
          alt={`scrolling img ${index}`}
          width={100}
          height={100}
          className="w-auto hover:opacity-60 hover:cursor-pointer"
        />
      ))}
    </div>
  );
};

export default ImageScroller;
