import Login from "./login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login page",
  description: "Login page for the Jet Protocol website.",
};

const page = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
