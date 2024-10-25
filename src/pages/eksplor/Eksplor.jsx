import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios"; // Pastikan axios diimpor

const Eksplor = () => {
  const [data, setData] = useState([]); // Set default state sebagai array
  const [cari, setCari] = useSearchParams();
  const pencarian_id = cari.get("pencarian_id");

  const ubahCari = useCallback((input) => {
    setCari({ pencarian_id: input });
  });

  const perubahan = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${pencarian_id}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RjMjJlMDQxMDQzMWQ2ZjhlNjhhMTQ5NzEwOWFjMCIsIm5iZiI6MTcyOTMwOTk2MC40NTA3MjQsInN1YiI6IjY3MDQ5MTcyMWI5NmI4ZWY0YzY5YjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v1FcUz10tVNo1aZ2hFPPZ345EKM9uDW08rnYCLmC5dQ",
          },
        }
      );
      setData(response.data.results); // Pastikan Anda mengambil results dari API TMDB
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (pencarian_id) {
      perubahan();
    }
  }, [pencarian_id]);

  return (
    <div className="min-h-screen pt-40 w-full dark:bg-black dark:text-violet-800 bg-white text-black">
      <label className="input input-bordered flex items-center gap-2  dark:bg-black dark:text-violet-800 bg-white text-black w-4/6 mx-auto mb-10">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          onChange={(e) => ubahCari(e.target.value)} 
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className="grid grid-cols-7 w-full overflow-x-auto gap-6  dark:bg-black dark:text-violet-800 bg-white text-black">
        {data?.map((item,index) => {
          return (
            <div
            key={index}
            className="card w-44 flex-shrink-0 bg-base-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <figure className="h-[400x]">
              <img
                className="object-cover w-44 h-64"
                src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                alt={item.title}
              />
            </figure>
            <div className="card-body p-3 dark:bg-black dark:text-white bg-white text-black">
              <h2 className="card-title text-lg font-semibold dark:bg-black dark:text-white bg-white text-black">
                {item.title}
              </h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Play</button>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Eksplor;
