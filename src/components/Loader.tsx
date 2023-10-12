import Image from "next/image";
import React from "react";

const Loader = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <Image
      src="/spinner.svg"
      alt="Loading..."
      width={width}
      height={height}
      className="m-auto"
    />
  );
};

export default Loader;
