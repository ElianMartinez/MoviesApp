import React from "react";
import { movies } from "../../data/movies";
import { MovieCard } from "../MovieCard";
export const ListMovies = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
        marginBottom: "300px",
      }}
    >
      {movies.map((item, i) => {
        return <MovieCard key={i} id={i} {...item} />;
      })}
    </div>
  );
};
