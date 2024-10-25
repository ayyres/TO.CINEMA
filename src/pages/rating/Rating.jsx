import axios from "axios";
import React, { useEffect, useState } from "react";
import RatingView from "./RatingView";

const Rating = () => {
  const [rating, setRating] = useState([]);

  const HapusRating = async (id) => {
    try {
      const response = await axios.delete(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RjMjJlMDQxMDQzMWQ2ZjhlNjhhMTQ5NzEwOWFjMCIsIm5iZiI6MTcyOTMwOTk2MC40NTA3MjQsInN1YiI6IjY3MDQ5MTcyMWI5NmI4ZWY0YzY5YjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v1FcUz10tVNo1aZ2hFPPZ345EKM9uDW08rnYCLmC5dQ",
          },
        }
      );
      if (await response.data.status_code == 13) {
        alert("Berhasil Hapus Rating!");
        setRating(rating?.filter(item => item.id !== id))
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/account/21559405/rated/movies`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RjMjJlMDQxMDQzMWQ2ZjhlNjhhMTQ5NzEwOWFjMCIsIm5iZiI6MTcyOTMwOTk2MC40NTA3MjQsInN1YiI6IjY3MDQ5MTcyMWI5NmI4ZWY0YzY5YjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v1FcUz10tVNo1aZ2hFPPZ345EKM9uDW08rnYCLmC5dQ",
            },
          }
        );
        setRating(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, []);
  return <RatingView HapusRating={HapusRating} rating={rating} />;
};

export default Rating;
