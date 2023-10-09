import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <>
      <section className="pt-52 text-center">
        <h1 className="text-3xl text-sage-green border-b pb-2">
          About Jet Protocol
        </h1>
        <p className="text-xl mt-10 text-white">
          Jet Protocol is a cutting-edge decentralized finance (DeFi) platform
          that is redefining the financial landscape by democratizing access to
          borrowing and lending. Leveraging the power of blockchain technology,
          specifically the Solana blockchain, Jet Protocol provides a secure,
          transparent, and efficient platform for peer-to-peer financial
          transactions. Our mission is to make financial services more
          accessible, irrespective of geographical location. We strive to
          provide a platform where anyone can borrow and lend assets with ease,
          fostering a community of users who can benefit from the financial
          opportunities by DeFi.
        </p>
      </section>

      <section className="pt-16 text-center">
        <h2 className="text-3xl text-sage-green border-b pb-2">Features</h2>
        <div className="flex justify-center flex-wrap pt-6">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h2 className="text-2xl text-sage-green">Fast Transactions</h2>
            <p className="text-lg mt-3 text-white">
              Built on the Solana blockchain for unrivaled transaction speeds.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h2 className="text-2xl text-sage-green">Secure Platform</h2>
            <p className="text-lg mt-3 text-white">
              Our protocol is secured through transparent and efficient smart
              contracts.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h2 className="text-2xl text-sage-green">High Scalability</h2>
            <p className="text-lg mt-3 text-white">
              Designed for scalability to accommodate substantial growth.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h2 className="text-2xl text-sage-green">User-Friendly</h2>
            <p className="text-lg mt-3 text-white">
              Intuitive user interface makes it easy to navigate the platform.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center pt-16 pb-24">
        <h1 className="text-3xl text-sage-green border-b pb-2">
          Join Our Community
        </h1>
        <p className="text-lg mt-6 text-white">
          Become part of the Jet Protocol community. Connect with us on social
          media, join our forum discussions, and stay updated with our latest
          news.
        </p>
        <div className="flex gap-8 justify-center mt-12">
          <Link
            href="https://twitter.com/jetprotocol"
            className="text-2xl text-sage-green hover:text-white"
          >
            Twitter
          </Link>
          <Link
            href="https://www.reddit.com/r/JetProtocol/"
            className="text-2xl text-sage-green hover:text-white"
          >
            Reddit
          </Link>
          <Link
            href="https://discord.gg/jetprotocol"
            className="text-2xl text-sage-green hover:text-white"
          >
            Discord
          </Link>
        </div>
      </section>
    </>
  );
};

export default Info;
