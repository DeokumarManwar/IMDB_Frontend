import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { MovieCard } from "../../components/MovieCard";
import { Details } from "../Details/Details";
import { movieAction } from "../../Store/movie-slice";
import {
  getAllActors,
  getAllActress,
  getAllDirector,
  getAllMovie,
} from "../../api";
export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAllMovie().then((res) => {
      dispatch(movieAction.addMovies(res.data.movies));
    });
    getAllActors().then((res) => {
      dispatch(movieAction.addActors(res.data.actors));
    });
    getAllActress().then((res) => {
      dispatch(movieAction.addActress(res.data.actress));
    });
    getAllDirector().then((res) => {
      dispatch(movieAction.addDirectors(res.data.directors));
    });
  }, []);
  return (
    <div className="shadow-lg bg-black w-screen h-screen">
      <Navbar />
      {/* <MovieCard /> */}
      <Details />
    </div>
  );
};
