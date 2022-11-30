import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Main = () => {
  const newLocal = " dark:text-gray-400 dark:bg-[#111827]";
  return (
    <>
      <Header />
      <main className={newLocal}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
