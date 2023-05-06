import React from "react";
import { Navbar } from "../../components/Navbar";
import { MovieCard } from "../../components/MovieCard";
import { Details } from "../Details/Details";
export const Home = () => {
  return (
    <div className="shadow-lg bg-black w-screen h-screen">
      <Navbar />
      {/* <MovieCard /> */}
      <Details />
    </div>
  );
};
