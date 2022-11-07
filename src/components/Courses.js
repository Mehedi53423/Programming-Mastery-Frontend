import React from "react";
import Sidebar from "./Sidebar";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  return (
    <div className="container mx-auto md:mt-36 mt-10">
      <div className="flex">
        <div className="border w-1/6">
          <Sidebar></Sidebar>
        </div>
        <div className="border w-5/6">
          <CourseDetails></CourseDetails>
        </div>
      </div>
    </div>
  );
};

export default Courses;
