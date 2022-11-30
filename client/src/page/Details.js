import React, { useContext } from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import PDFFile from "../components/section/PDFFile";
import { CoursesContext } from "../context/CourseContextProvider";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Details = () => {
  const { setCart } = useContext(CoursesContext);
  const {
    id,
    courseName,
    thumbnail,
    shortDes,
    instructor,
    updated,
    rating,
    student,
    description,
    price,
    outline,
    include,
  } = useLoaderData();
  const navigate = useNavigate();

  const checkOutHandler = () => {
    navigate(`/checkout/${id}`);
    setCart({ courseName, price });
  };

  return (
    <>
      <div className="px-1">
        <Container CS=" max-w-[1200px] gap-4 text-slate-50 py-8 grid md:grid-cols-[1fr_400px]">
          <div className="text-neutral-700 dark:text-neutral-300 border dark:border-black p-4">
            <div className="md:flex gap-2   ">
              <h1 className="text-3xl font-bold">{courseName}</h1>
              <div>
                <PDFDownloadLink
                  document={
                    <PDFFile
                      data={{
                        courseName,
                        thumbnail,
                        description,
                        outline,
                        price,
                      }}
                    />
                  }
                >
                  <button className="bg-gray-300 w-[120px] text-slate-800 rounded ">
                    Download PDF
                  </button>
                </PDFDownloadLink>
              </div>
            </div>
            <p className="font-semibold mt-2 text-lg ">{shortDes}</p>
            <div className="grid md:grid-cols-2 my-2  text-sm gap-2 rounded">
              <div className="bg-slate-100 border dark:border-black dark:bg-gray-800 dark:text-neutral-300 p-2 rounded">
                <p>Created by : {instructor}</p>
                <p>Last Updated : {updated} </p>
              </div>
              <div className="bg-slate-100 border dark:border-black dark:bg-gray-800 dark:text-neutral-300 p-2 rounded">
                <p>Rating : {rating}</p>
                <p>Students : {student}</p>
              </div>
            </div>
            <div className="bg-slate-100 border dark:border-black dark:bg-gray-800 dark:text-neutral-300 p-2 rounded">
              <h3 className="text-lg font-bold my-1 ">Descriptions : </h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="shadow bg-slate-100  border dark:border-black dark:bg-gray-800 dark:text-neutral-300 flex flex-col rounded cursor-pointer">
            <div className="relative">
              <img
                src={thumbnail}
                alt="img"
                className="w-full max-h-60 rounded-t"
              />
              <span className="absolute text-6xl inset-0  flex justify-center items-center">
                <MdPlayCircleOutline className="bg-red-500 border dark:border-black dark:bg-gray-800 dark:text-neutral-300 rounded-full" />
              </span>
            </div>
            <div className="flex-1 p-4 flex flex-col ">
              <div className="text-2xl font-bold flex-1 text-center text-neutral-700 dark:text-neutral-300 ">
                <p className="">Price: ${price}</p>
              </div>
              <button
                // to={`/checkout/${id}`}
                onClick={checkOutHandler}
                className="py-3 text-center rounded bg-red-500 border dark:border-black  dark:text-neutral-300 font-bold"
              >
                Get premium access
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Container CS="max-w-[1200px] gap-4 text-slate-50 py-12  grid lg:grid-cols-[1fr_400px] gap-2">
        <div className=" text-neutral-700 dark:text-neutral-300 border dark:border-black rounded p-4">
          <h1 className="text-2xl font-bold">What you'll learn</h1>
          <ul className=" mt-4 grid lg:grid-cols-2 ">
            {outline.map((item, i) => (
              <li key={i} className="list-disc py-1 pr-6 ml-4 lg:ml-8">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 border dark:border-black rounded p-4">
          <h1 className="text-2xl font-bold">Includes this course</h1>
          <ul className="  mt-4  ">
            {include.map((item, i) => (
              <li key={i} className="list-disc py-1 ml-4 lg:ml-8">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Details;
