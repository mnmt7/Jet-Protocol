import SignUp from "./sign-up";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up page",
  description: "Sign up page for the Jet Protocol website.",
};

const page = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default page;
