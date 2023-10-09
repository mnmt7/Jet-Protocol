"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
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

    // sends a sign up request to supabase email provider
    await supabase.auth.signUp({
      email,
      password,
      // supabase will send a verification email to the user
      // the user will be redirected to this url after clicking the link
      // this url is handled by the api/auth/callback.ts file
      options: {
        emailRedirectTo: `https://jet-protocol-six.vercel.app/api/auth/callback`,
      },
    });

    setEmail("");
    setPassword("");

    setMessage("Please check your inbox");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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
            be part of
            <span className="block italic mt-3 font-playfair font-[500]">
              defi governance
            </span>
          </h1>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                    value={email}
                    onChange={handleEmailChange}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
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
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>
              </div>

              <div className="text-black">{message}</div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sage-green hover:bg-sage-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <p className="text-gray-400">
          Already a member?{" "}
          <a href="/login" className="text-sage-green hover:sage-green-dark">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Page;
