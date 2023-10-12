"use client";

import MovieCard from "@/components/MovieCard";
import { fetchDataFromApi } from "@/utils/api";
import { useQuery } from "react-query";
import NavBar from "@/components/Nav";
import Loader from "@/components/Loader";
import LoadingMoviesCard from "@/components/LoadingMoviesCard";

const Page = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchDataFromApi("/movie/top_rated"),
  });

  if (isError) {
    let errorMessage = "An error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return (
      <>
        <NavBar />
        <div className="pt-52 text-xl text-center">
          <p>Error: {errorMessage}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:gap-x-4 gap-y-6 sm:grid-cols-3 grid-cols-2 gap-2 pt-32">
        {isLoading ? (
          Array.from(Array(12).keys()).map((index: number) => {
            return <LoadingMoviesCard key={index} />;
          })
        ) : (
          <>
            {data.results.map((movie: any, index: number) => {
              return <MovieCard data={movie} key={index} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Page;
