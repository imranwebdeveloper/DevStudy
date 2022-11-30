import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex-1">
      <Link
        to="/"
        className="text-2xl text-indigo-700 dark:text-indigo-500 font-bold"
      >
        DevStudy<small className="text-rose-400">.com</small>
      </Link>
    </div>
  );
};

export default Logo;
