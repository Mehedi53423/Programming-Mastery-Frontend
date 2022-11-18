import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, name, logo } = course;
  return (
    <Link
      key={id}
      to={`/Course/${id}`}
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md pt-5 hover:-translate-y-2 font-merienda"
    >
      <img className="w-32 h-32 mx-auto" src={logo} alt="Logo" />
      <div className="p-5">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
          {name}
        </h1>
      </div>
    </Link>
  );
};

export default CourseCard;
