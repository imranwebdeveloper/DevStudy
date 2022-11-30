import React, { useContext } from "react";
import Container from "../components/common/Container";
import CardSection from "../components/section/CardSection";
import Categories from "../components/section/Categories";
import { CoursesContext } from "../context/CourseContextProvider";

const Courses = () => {
  const { courses } = useContext(CoursesContext);

  return (
    <Container CS="grid lg:grid-cols-[320px_1fr] gap-4 min-h-screen py-4">
      <aside className="border p-2 rounded dark:border-black">
        <Categories />
      </aside>
      <section className="p-4  rounded border dark:border-black">
        <h1 className="text-3xl font-bold py-2">
          Build websites and applications with courses
        </h1>
        <p className="max-w-3xl mb-4">
          The world of web development is as wide as the internet itself. Much
          of our social and vocational lives play out on the internet, which
          prompts new industries aimed at creating, managing, and debugging the
          websites and applications that we increasingly rely on.
        </p>
        <CardSection courses={courses}>
          <h1 className="text-lg font-bold">Explorer Your Favorite Course</h1>
        </CardSection>
      </section>
    </Container>
  );
};

export default Courses;
