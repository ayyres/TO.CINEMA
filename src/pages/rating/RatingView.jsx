import { Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const RatingView = ({ rating, HapusRating }) => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-black">
      <section>
        <div className="flex w-full overflow-x-auto gap-6 py-4">
          {rating?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col min-w-[200px]">
                <Link to={`/detail/${item.id}`}>
                  <div className="relative card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                    <figure className="h-64 relative">
                      <img
                        className="object-cover w-full h-full"
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.title}
                      />
                      {/* Hover overlay with title and play button */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center p-2 flex-col">
                        <button className="text-white bg-violet-800 rounded-full p-3 hover:bg-violet-700 transition duration-300 ease-in-out">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.752 11.168l-6.086-3.406A1 1 0 007 8.607v6.786a1 1 0 001.666.838l6.086-3.406a1 1 0 000-1.674z"
                            />
                          </svg>
                        </button>
                        <h2 className="text-lg font-bold text-white text-center mt-2 drop-shadow-lg">
                          {item.title}
                        </h2>
                      </div>
                      {/* Trash icon positioned at the top-right */}
                      <button
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        onClick={(e) => {
                          e.preventDefault();
                          HapusRating(item.id);
                        }}
                        aria-label="Delete Rating"
                      >
                        <Trash2 />
                      </button>
                    </figure>
                    {/* Rating text displayed outside the hover effect */}
                    <div className="p-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Rating: {item.rating}
                      </p>
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
