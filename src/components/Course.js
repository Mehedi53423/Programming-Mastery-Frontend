import React from "react";
import Sidebar from "./Sidebar";
import CourseDetails from "./CourseDetails";
import { useLoaderData } from "react-router-dom";

const Course = () => {
  const course = useLoaderData();
  return (
    <div className="container mx-auto md:mt-36 mt-10 md:mb-24">
      <div className="flex">
        <div className="w-1/6 fixed">
          <Sidebar className=""></Sidebar>
        </div>
        <div className="w-1/6"></div>
        <div className="w-5/6">
          <CourseDetails key={course.id} course={course}></CourseDetails>
        </div>
      </div>
    </div>
  );
};

export default Course;
