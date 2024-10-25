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
    <div className="dark:bg-black dark:text-white bg-white text-black min-h-screen py-8">
      <div className="container mx-auto p-6">
        <div className="card card-side flex flex-col md:flex-row shadow-xl dark:bg-black dark:text-white bg-white text-black rounded-lg overflow-hidden">
          {/* Movie Poster */}
          <figure className="md:w-1/3 w-full">
            <img
              src={"https://image.tmdb.org/t/p/w500" + detail?.poster_path}
              alt={detail?.title}
              className="object-cover w-full h-full"
            />
          </figure>

          {/* Movie Details */}
          <div className="card-body p-6 md:w-2/3">
            <h2 className="card-title text-4xl font-bold mb-4">
              {detail?.title}
            </h2>
            <p className="text-lg mb-4">{detail?.overview}</p>
            
            {/* Rating Section */}
            <div className="rating flex items-center mb-6">
              <span className="text-lg mr-4">Your Rating:</span>
              {[2, 4, 6, 8, 10].map((ratingValue) => (
                <input
                  key={ratingValue}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400 cursor-pointer"
                  onClick={() => Rating(ratingValue)}
                />
              ))}
            </div>

            {/* Watch Button */}
            <div className="card-actions justify-start">
              <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
