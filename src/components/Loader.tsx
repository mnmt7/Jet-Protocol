import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center min-h-screen content-center">
      <Image src="/spinner.svg" alt="Loading..." width={100} height={100} />
    </div>
  );
};

export default Loader;
