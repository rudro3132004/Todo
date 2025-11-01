import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

export default function ThemeBtn() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        relative flex items-center justify-center 
        w-9 h-9 md:w-11 md:h-11 
        rounded-full border border-zinc-300 dark:border-zinc-600 
        bg-white dark:bg-zinc-600 
        text-zinc-700 dark:text-yellow-400 
        hover:bg-zinc-100 dark:hover:bg-zinc-800 
        shadow-sm hover:shadow-md 
        transition-all duration-300 ease-in-out cursor-pointer
      "
    >
      {theme === "dark" ? (
        <BsMoonStarsFill className="text-xl text-zinc-200" />
        
      ) : (
        <FiSun className="text-2xl animate-spin-slow text-yellow-400" />
      )}
    </button>
  );
}
