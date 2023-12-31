"use client";

import MovieCard from "@/components/MovieCard";
import { fetchDataFromApi } from "@/utils/api";
import { useQuery } from "react-query";
import NavBar from "@/components/Nav";
import Loader from "@/components/Loader";

const Page = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchDataFromApi("/movie/top_rated"),
  });

  return (
    <>
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:gap-x-4 gap-y-6 sm:grid-cols-3 grid-cols-2 gap-2 pt-32">
          {data.results.map((movie: any, index: number) => {
            return <MovieCard data={movie} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default Page;
