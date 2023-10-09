import Dashboard from "./dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard page",
  description:
    "Dashboard page for the Jet Protocol website. The user can only access this page if he is logged in. This page shows movies data from TMDB.",
};

const page = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default page;
