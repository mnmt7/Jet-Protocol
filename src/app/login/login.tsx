"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

import { useRouter } from "next/navigation";
import Image from "next/image";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const router = useRouter();

  // instantiate supabase client
  const supabase = createClientComponentClient();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoggingIn(true);

    // sends a signIn request to supabase, authenticating the user
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoggingIn(false);

    // once the user is authenticated, redirect to the dashboard which is a protected route and conatins the movies list
    if (!error) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6">
      <div>
        <div className="text-center">
          <div>
            <Image
              src="/logo.png"
              alt="Logo Jet Protocol"
              width={120}
              height={24}
              className="w-44 h-auto m-auto hover:cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
          <h1 className="text-5xl mt-7">
            log in to
            <span className="block italic mt-3 font-playfair font-[500]">
              defi governance
            </span>
          </h1>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="current-password"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sage-green hover:bg-sage-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={loggingIn}
                >
                  {loggingIn ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <p className="text-gray-400">
          Not a member?{" "}
          <Link
            href="/sign-up"
            className="text-sage-green hover:text-sage-green-dark"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
