import { Link } from "react-router-dom";
import Container from "../components/common/Container";

const Home = () => {
  return (
    <Container CS="min-h-screen">
      <div className="bg-g">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800  dark:text-neutral-300 font-black leading-7 md:leading-10">
              Find
              <span className="text-indigo-700"> DevStudy </span>a top degree
              that fits your life
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              Start, switch, or advance your career with more than 5,200
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/courses"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"
            >
              Explore Course
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
