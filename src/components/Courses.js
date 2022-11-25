import React from "react";
import Sidebar from "./Sidebar";
import CourseCard from "./CourseCard";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="container mx-auto md:mt-36 mt-10 md:mb-24">
      <div className="md:flex">
        <div className="md:w-1/6 md:fixed hidden md:block">
          <Sidebar className=""></Sidebar>
        </div>
        <div className="md:w-3/12"></div>
        <div className="md:w-5/6">
          <h1 className="text-center font-bold font-messiri text-3xl">
            Courses
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course}></CourseCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
