import React, { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article className="mb-2 bg-slate-200 dark:bg-[#1F2937] dark:text-gray-400 text-gray-700 p-4 rounded">
      <header
        className="flex justify-between gap-2 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <p className="flex-1  font-bold">{title}</p>
        <span className="text-3xl">
          {toggle ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
        </span>
      </header>
      {toggle && <main className="py-4">{children}</main>}
    </article>
  );
};

export default Accordion;
