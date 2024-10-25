import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [detail, setdetail] = useState();

  const headers = useMemo(
    () => ({
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjViZmZhMmU2MDRiZjk4MGE2NDM3ODBiNjg4NjZhZSIsIm5iZiI6MTcyODY0MjE1My4zNzM1NTYsInN1YiI6IjY3MDQ4NzdkYmQ3Y2Q4NmRhNTFkMmZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GY2x5Zmhjc2aT_tWdztJlzWORWoq0Skb2vEm7U0ht4o",
    }),
    []
  );
  const Rating = async (rating) => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        { value: rating },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RjMjJlMDQxMDQzMWQ2ZjhlNjhhMTQ5NzEwOWFjMCIsIm5iZiI6MTcyOTMwOTk2MC40NTA3MjQsInN1YiI6IjY3MDQ5MTcyMWI5NmI4ZWY0YzY5YjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v1FcUz10tVNo1aZ2hFPPZ345EKM9uDW08rnYCLmC5dQ",
          },
        }
      );
      if ((await response.data.status_code) == 1) {
        alert("Berhasil Ditambahkan Ke Rating!");
      } else if ((await response.data.status_code) == 12) {
        alert("Rating Berhasil Di Update!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: headers,
          }
        );
        setdetail(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [id, headers]);

  return (
    <div className="dark:bg-black dark:text-white bg-white text-black">
      <div className="card card-side shadow-xl dark:bg-black dark:text-white bg-white text-black">
        <figure>
          <img
            src={"https://image.tmdb.org/t/p/w500" + detail?.poster_path}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{detail?.title}</h2>
          <p>{detail?.overview}</p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={() => Rating(2)}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={() => Rating(4)}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={() => Rating(6)}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={() => Rating(8)}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={() => Rating(10)}
            />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
