import Image from "next/image";
import React from "react";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({
  data,
}: {
  data: { poster_path: string; title: string };
}) => {
  const posterUrl = BASE_IMG_URL + data.poster_path;

  return (
    <div className="text-center hover:cursor-pointer">
      <Image
        src={posterUrl}
        alt={data.title}
        width={200}
        height={300}
        className="rounded-lg border border-gray-900 m-auto hover:opacity-60 hover:shadow-lg transition duration-500 ease-in-out"
      />
      <h2 className="text-lg font-semibold mt-2 hover:text-sage-green">
        {data.title}
      </h2>
    </div>
  );
};

export default MovieCard;
