import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="hidden md:flex flex-1 justify-end gap-2 ">
      <NavLink
        to="/courses"
        className="px-2 py-1 font-bold hover:text-orange-400"
      >
        Courses
      </NavLink>

      <NavLink to="/blog" className="px-2 py-1 font-bold hover:text-orange-400">
        Blog
      </NavLink>
    </nav>
  );
};
