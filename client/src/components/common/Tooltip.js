import React from "react";

const Tooltip = ({ children, title }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute top-9 flex flex-col items-center hidden mb-6 group-hover:flex">
        <p className="relative z-10 w-24 rounded-lg p-2 text-xs text-center leading-none bg-white  whitespace-no-wrap text-neutral-700 dark:bg-slate-600 dark:text-neutral-300   shadow-lg">
          {title}
        </p>
        <div className="w-3 h-3 -mt-8 rotate-45 bg-white dark:bg-slate-600"></div>
      </div>
    </div>
  );
};

export default Tooltip;
