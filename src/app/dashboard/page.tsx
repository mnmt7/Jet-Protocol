"use client";

import MovieCard from "@/components/MovieCard";
import { fetchDataFromApi } from "@/utils/api";
import { useQuery } from "react-query";
import NavBar from "@/components/Nav";
import Loader from "@/components/Loader";

const page = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchDataFromApi("/movie/top_rated"),
  });

  return (
    <>
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:gap-x-4 gap-y-6 sm:grid-cols-3 grid-cols-2 gap-2 mt-10">
          {data.results.map((movie: any) => {
            return <MovieCard data={movie} />;
          })}
        </div>
      )}
    </>
  );
};

export default page;
