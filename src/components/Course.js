import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import CourseDetails from "./CourseDetails";
import { useLoaderData } from "react-router-dom";

const Course = () => {
  const course = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://programming-mastery-server-mehedi53423.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="container mx-auto md:mt-36 mt-10 md:mb-24 font-messiri">
      <div className="md:flex">
        <div className="grid grid-cols-3 gap-2 md:hidden mt-2 mb-5 mx-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/Course/${category.id}`}
              className="p-1 border rounded-lg font-semibold text-lg text-center"
            >
              {category.name}
            </Link>
          ))}
        </div>
        <div className="md:w-1/6 md:fixed hidden md:block">
          <Sidebar className=""></Sidebar>
        </div>
        <div className="md:w-1/6"></div>
        <div className="md:w-5/6">
          <CourseDetails key={course.id} course={course}></CourseDetails>
        </div>
      </div>
    </div>
  );
};

export default Course;
