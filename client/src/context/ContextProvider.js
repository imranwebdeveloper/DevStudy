import React from "react";
import AuthContextProvider from "./AuthContextProvider";
import CourseContextProvider from "./CourseContextProvider";

const ContextProvider = ({ children }) => {
  return (
    <CourseContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>;
    </CourseContextProvider>
  );
};

export default ContextProvider;
