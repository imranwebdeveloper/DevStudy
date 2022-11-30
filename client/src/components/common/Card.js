import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ course }) => {
  const navigate = useNavigate();
  const { id, thumbnail, courseName, instructor, rating, student, price } =
    course;

  return (
    <article
      className="shadow-md cursor-pointer dark:bg-[#1F2937] dark:text-gray-400 "
      onClick={() => navigate(`/courses/${id}`)}
    >
      <header>
        <img src={thumbnail} alt="img" className="w-full max-h-[160px] " />
      </header>
      <main className="p-3 font-bold  text-sm">
        <p className="text-gray-700 dark:text-slate-300 min-h-[40px]">
          {courseName}
        </p>
        <small className="text-slate-400">{instructor}</small>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xl font-bold text-gray-800 dark:text-slate-300">
            ${price}
          </p>
          <p className="text-slate-400 ">
            <span className="text-orange-500 font-bold"> {rating} </span> (
            {student})
          </p>
        </div>
      </main>
      <footer></footer>
    </article>
  );
};

export default Card;
