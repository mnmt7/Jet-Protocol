import React from "react";

const LoadingMoviesCard = () => {
  return (
    <div>
      <div className="w-full h-[300px] animate-pulse bg-gray-900 rounded-lg"></div>
      <div className="mt-2 h-6 w-full animate-pulse bg-gray-900 rounded-lg"></div>
    </div>
  );
};

export default LoadingMoviesCard;
