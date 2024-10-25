import { Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const RatingView = ({ rating, HapusRating }) => {
  return (
    <div>
      <section>
        <h2 className="font-bold text-3xl p-4 dark:bg-black dark:text-white bg-white text-black">
          🎞 Film Populer
        </h2>
        <div className="flex w-full overflow-x-auto gap-6 dark:bg-black dark:text-white bg-white text-black ">
          {rating?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <Link to={"/detail/" + item.id}>
                  <div
                    key={index}
                    className="relative card w-44 flex-shrink-0 bg-base-100 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
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
                      <p>{item.rating}</p>
                      <button className="absolute bottom-0 right-0" onClick={() => HapusRating(item.id)}>
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default RatingView;
