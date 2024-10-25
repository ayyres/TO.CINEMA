import axios from "axios";
import { useEffect, useState } from "react";
import HomeView from "./HomeView";
import { File } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setnow_playing, setPopuler, settop_rating, setup_coming } from "../../store/action/movieAction";


const Home = () => {
  const dispatch  = useDispatch ()
  const { Populer,now_playing,top_rating,up_coming} = useSelector((state)=>state.movieReducer)
  const ambilFilmTrending = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RjMjJlMDQxMDQzMWQ2ZjhlNjhhMTQ5NzEwOWFjMCIsIm5iZiI6MTcyODM1ODE5Ny4wNzYzMDIsInN1YiI6IjY3MDQ5MTcyMWI5NmI4ZWY0YzY5YjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hvZiOmDghuDUnd2PbDZNvjcDEzKwamhayDu9XS0qmtk",
          },
        }
      );
      const data = await response.data;
      dispatch(setPopuler(data)); 
    } catch (error) {
      console.log(error.message);
    }
  };
  const ambilFilmBaru = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RjMjJlMDQxMDQzMWQ2ZjhlNjhhMTQ5NzEwOWFjMCIsIm5iZiI6MTcyODM1ODE5Ny4wNzYzMDIsInN1YiI6IjY3MDQ5MTcyMWI5NmI4ZWY0YzY5YjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hvZiOmDghuDUnd2PbDZNvjcDEzKwamhayDu9XS0qmtk",
          },
        }
      );
      const data = await response.data;
      dispatch(setnow_playing(data));
    } catch (error) {
      console.log(error.message);
    }
  };
  const ambilFilmTop = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RjMjJlMDQxMDQzMWQ2ZjhlNjhhMTQ5NzEwOWFjMCIsIm5iZiI6MTcyODM1ODE5Ny4wNzYzMDIsInN1YiI6IjY3MDQ5MTcyMWI5NmI4ZWY0YzY5YjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hvZiOmDghuDUnd2PbDZNvjcDEzKwamhayDu9XS0qmtk",
          },
        }
      );
      const data = await response.data;
      dispatch(settop_rating(data));
    } catch (error) {
      console.log(error.message);
    }
  };  
  const ambilFilmUp = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RjMjJlMDQxMDQzMWQ2ZjhlNjhhMTQ5NzEwOWFjMCIsIm5iZiI6MTcyODM1ODE5Ny4wNzYzMDIsInN1YiI6IjY3MDQ5MTcyMWI5NmI4ZWY0YzY5YjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hvZiOmDghuDUnd2PbDZNvjcDEzKwamhayDu9XS0qmtk",
          },
        }
      );
      const data = await response.data;
      dispatch(setup_coming(data));
    } catch (error) {
      console.log(error.message);
    }
  };  
  useEffect(() => {
    ambilFilmTrending();
    ambilFilmBaru();
    ambilFilmTop();
    ambilFilmUp();
  }, []);

  return <HomeView Populer={Populer} now_playing={now_playing} top_rating={top_rating} up_coming={up_coming} />;
};
export default Home;
