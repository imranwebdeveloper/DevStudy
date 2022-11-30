import React, { useContext } from "react";
import { CoursesContext } from "../../context/CourseContextProvider";

const Categories = () => {
  const { category, setCourses } = useContext(CoursesContext);
  const categoryHandler = (item) => {
    const lowercase = item.toLowerCase();
    const id = lowercase.split(" ").join("-");
    fetch(`https://server-one-beryl.vercel.app/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((e) => console.log(e));
  };

  return (
    <div className="mt-4  text-gray-500  dark:text-gray-400">
      <h1 className="text-xl font-bold text-slate-800 dark:text-gray-300 ">
        Categories
      </h1>
      <ul className="mt-4">
        {category.map((item, i) => (
          <li
            key={i}
            className="py-3 px-2  rounded font-bold cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-100"
            onClick={() => categoryHandler(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
