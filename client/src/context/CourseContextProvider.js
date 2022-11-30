import { createContext, useEffect, useState } from "react";
export const CoursesContext = createContext("Courses");

const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dev-study-server.vercel.app/courses");
      const data = await res.json();
      const categories = ["All", ...new Set(data.map((item) => item.category))];
      setCourses(data);
      setCategory(categories);
    };
    fetchData();
  }, []);

  const coursesValue = { category, courses, setCourses, cart, setCart };
  return (
    <CoursesContext.Provider value={coursesValue}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CourseContextProvider;
