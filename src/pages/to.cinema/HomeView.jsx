import axios from "axios";
import { File, SquarePlay } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeView = ({  Populer,now_playing ,top_rating,up_coming}) => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [randomVideo, setRandomVideo] = useState(null);
  const randomVideos = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2RjMjJlMDQxMDQzMWQ2ZjhlNjhhMTQ5NzEwOWFjMCIsIm5iZiI6MTcyODM1ODE5Ny4wNzYzMDIsInN1YiI6IjY3MDQ5MTcyMWI5NmI4ZWY0YzY5YjlkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hvZiOmDghuDUnd2PbDZNvjcDEzKwamhayDu9XS0qmtk",
          },
        }
      );
      const data = await response.data.results;
      const hasilfilter = data.find((hasil) => hasil.type == "Trailer");
      setRandomVideo(hasilfilter);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (now_playing?.results?.length > 0) {
      const randomIndex = Math.floor(Math.random() * now_playing.results.length);
      setRandomMovie(now_playing.results[randomIndex]);
      randomVideos(now_playing.results[randomIndex].id);
    }
  }, [now_playing]);
  try {
    return (
      <div className="dark:bg-black">
        <section>
          <div className="relative min-h-screen">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${randomVideo?.key}?autoplay=1&loop=1&controls=0&mute=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 z-10"
            ></iframe>
            <div className="hero-overlay absolute top-0 left-0 z-20 bg-opacity-60"></div>
            <div className="absolute ml-10 top-1/4 left-0 z-30 text-neutral-content flex justify-start items-start gap-8">
              <div className="w-max">
                <img
                  src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
                  alt={randomMovie.title}
                  className="w-64 h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="max-w-md text-left space-y-4">
                {randomMovie && (
                  <>
                    <h1 className="text-5xl font-bold">{randomMovie.title}</h1>
                    <p className="text-lg leading-relaxed">
                      {randomMovie.overview}
                    </p>
                    <button className="btn btn-primary">Watch</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="font-bold text-3xl p-4 dark:bg-black dark:text-white bg-white text-black">
            🎞 Film Popular
          </h2>
          <div className="flex w-full overflow-x-auto gap-6 dark:bg-black dark:text-white bg-white text-black ">
            {Populer?.results?.map((item, index) => {
              return (
                <Link key={index} to={"/detail/" + item.id}>
                  <div
                    key={index}
                    className="card w-44 flex-shrink-0 bg-base-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <figure className="h-[400x]">
                      <img
                        className="object-cover w-44 h-64"
                        src={
                          "https://image.tmdb.org/t/p/w500" + item.poster_path
                        }
                        alt={item.title}
                      />
                    </figure>
                    <div className="card-body p-3 dark:bg-black dark:text-white bg-white text-black">
                      <h2 className="card-title text-lg font-semibold dark:bg-black dark:text-white bg-white text-black">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="font-bold text-3xl p-4 dark:bg-black dark:text-white bg-white text-black">
            🎬 Now Playing
          </h2>
          <div className="grid grid-cols-7 gap-6 dark:bg-black dark:text-white bg-white text-black ">
            {now_playing?.results?.map((item, index) => {
              return (
                <Link key={index} to={"/detail/" + item.id}>
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
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="font-bold text-3xl p-4 dark:bg-black dark:text-white bg-white text-black">
            ⭐Top Rating
          </h2>
          <div className="flex w-full overflow-x-auto gap-6 dark:bg-black dark:text-white bg-white text-black ">
            {top_rating?.results?.map((item, index) => {
              return (
                <Link key={index} to={"/detail/" + item.id}>
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
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="font-bold text-3xl p-4 dark:bg-black dark:text-white bg-white text-black">
            🎥 Up Coming
          </h2>
          <div className="grid grid-cols-7 gap-6 dark:bg-black dark:text-white bg-white text-black ">
            {up_coming?.results?.map((item, index) => {
              return (
                <Link key={index} to={"/detail/" + item.id}>
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
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default HomeView;
