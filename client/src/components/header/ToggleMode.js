import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Tooltip from "../common/Tooltip";
const ToggleMode = () => {
  const [darkMode, setMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center">
      <button
        className="text-2xl p-2 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-full "
        onClick={() => setMode(!darkMode)}
      >
        {darkMode ? (
          <Tooltip title="Light Mode">
            <MdOutlineLightMode />
          </Tooltip>
        ) : (
          <Tooltip title="Dark Mode">
            <MdOutlineDarkMode />
          </Tooltip>
        )}
      </button>
    </div>
  );
};

export default ToggleMode;
