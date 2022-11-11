import React from "react";
import Sidebar from "./Sidebar";
import CourseCard from "./CourseCard";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="container mx-auto md:mt-36 mt-10 md:mb-24">
      <div className="flex">
        <div className="w-1/6 fixed">
          <Sidebar className=""></Sidebar>
        </div>
        <div className="w-3/12"></div>
        <div className="w-5/6 mt-2">
          <div className="grid grid-cols-3 gap-6">
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
