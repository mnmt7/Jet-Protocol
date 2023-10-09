"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    const checkLogin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, []);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setIsLoggedIn(false);
      router.push("/");
    }
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap py-3 px-10 border-[0.1px] border-gray-600 rounded-full mt-8 bg-black relative">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:flex-grow">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={24}
          className="w-32 h-auto hover:cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={handleToggle}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute lg:static top-[60px] w-full left-0 lg:flex lg:items-center lg:w-auto lg:flex-grow bg-black pb-5 lg:pb-0`}
      >
        <div className="flex lg:flex-grow flex-col lg:flex-row text-center gap-x-8 pt-4 lg:pt-0">
          <Link href="/about">
            <div className="hover:text-sage-green text-xl border-b lg:border-0 py-2 lg:py-0">
              products
            </div>
          </Link>
          <Link href="/services">
            <div className="hover:text-sage-green text-xl border-b lg:border-0 py-2 lg:py-0">
              dao
            </div>
          </Link>
          <Link href="/contact">
            <div className="hover:text-sage-green text-xl border-b lg:border-0 py-2 lg:py-0">
              build
            </div>
          </Link>
          <Link href="/contact">
            <div className="hover:text-sage-green text-xl border-b lg:border-0 py-2 lg:py-0">
              docs
            </div>
          </Link>
        </div>

        {pathname === "/dashboard" ? null : (
          <div
            className={`${
              open ? "block" : "hidden"
            } lg:block bg-sage-green hover:bg-sage-green-dark hover:cursor-pointer text-lg rounded-full text-black py-2 px-6 font-bold text-center mt-4 lg:mt-0 shadow-inner-black-white`}
          >
            <Link href={isLoggedIn ? "/dashboard" : "/login"}>launch app</Link>
          </div>
        )}

        {isLoggedIn && (
          <div
            className={`${
              open ? "block" : "hidden"
            } lg:block bg-sage-green hover:bg-sage-green-dark hover:cursor-pointer text-lg rounded-full text-black py-2 px-6 font-bold text-center mt-4 lg:mt-0 shadow-inner-black-white lg:ml-4`}
            onClick={logout}
          >
            logout
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
