import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <>
      <div>
        <Image
          src="/gradient.png"
          alt="gradient"
          width={785}
          height={532}
          className="absolute top-14 sm:top- md:top-0 left-[50%] transform -translate-x-1/2 -z-10 w-[1000px] h-auto"
        />
      </div>

      <div className="pt-32 sm:pt-40 md:pt-44 lg:pt-52 text-center">
        <div className="text-xs text-sage-green">JET PROTOCOL</div>
        <div className="text-5xl mt-3">
          <span className="font-[500] ">the next generation of</span>
          <span className={`block font-playfair italic font-[600] mt-3`}>
            defi governance
          </span>
        </div>
        <div className="text-[#FFFFFF99] mt-6 text-xl md:text-2xl">
          experience open source, transparent and efficient borrowing
          <br />
          and lending on solana.
        </div>
        <div className="flex gap-8 justify-center mt-12">
          <div className=" bg-sage-green hover:bg-sage-green-dark hover:cursor-pointer text-lg rounded-full text-black py-2 px-6 font-semibold shadow-inner-black-white">
            <Link href="/docs">read docs</Link>
          </div>
          <div className=" bg-black hover:cursor-pointer text-lg rounded-full py-2 px-6  font-semibold shadow-inner-black-white hover:text-sage-green hover:bg-opacity-50">
            <Link href="/paper">how it works</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
