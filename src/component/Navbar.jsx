import React, { useContext, useEffect } from "react";
import ThemaContext from "../context/ThemaContext";
import {
  AlignJustify,
  ChartNoAxesCombined,
  Film,
  Heart,
  History,
  HousePlus,
  Search,
  Star,
  SunMoon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [getTheme, setTheme] = useContext(ThemaContext);
  const root = window.document.documentElement;

  useEffect(() => {
    console.log(getTheme);
  }, [getTheme]);

  const handleThema = () => {
    if (getTheme === "light") {
      setTheme("dark");
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      setTheme("light");
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };
  return (
    <div className="navbar bg-base-100 dark:bg-black dark:text-violet-800 sticky top-0 z-[99]">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="flex items-center drawer-content h-full">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="drawer-button flex items-center justify-center h-full dark:bg-black dark:text-white"
          >
            <AlignJustify />
          </label>
          <div className="flex-1 flex ">
            <Link to="/" className="btn btn-ghost text-xl dark:bg-black dark:text-violet-800 bg-white text-black">
              TO.CINEMA
            </Link>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu space-y-5 bg-base-200 text-base-content min-h-full w-80 p-4 dark:bg-black dark:text-violet-800 bg-white text-black">
            <div className="flex items-center justify-center h-full">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="drawer-button flex items-center justify-center h-full dark:bg-black dark:text-white"
              >
                <AlignJustify />
              </label>
              <div className="flex-1 flex">
              <Link to="/" className="btn btn-ghost text-xl dark:bg-black dark:text-violet-800 bg-white text-black">
              TO.CINEMA
            </Link>
              </div>
            </div>
            <li>
              <Link to={"/"}>
                <HousePlus />
                Home
              </Link>
            </li>
            <li>
              <Link to={"/eksplor"}>
                <Search />
                Eksplor
              </Link>
            </li>
            <li>
              <a>
                <Heart />
                Favorite
              </a>
            </li>
            <hr className="my-6 mx-3 border-gray-200 dark:border-gray-600/50" />
            <li>
              <Link to={"/rating"}>
              <Star />
                Rating Film
              </Link>
            </li>
            <li>
              <a>
                <History />
                Histori
              </a>
            </li>
            <li>
              <a>
                <Film />
                Genre Film
              </a>
            </li>
            <li>
              <a>
                <ChartNoAxesCombined />
                Populer
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
        <Search />
        </div>
        {/* Theme switcher */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            onChange={() => handleThema()}
            checked={getTheme == "light" ? false : true}
          />

          {/* icon */}
          <SunMoon /> 

        </label>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content dark:bg-black dark:text-white bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge bg-white text-black border-2 border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-violet-800">
                  New
                </span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
