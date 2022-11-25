import React from "react";
import ReactToPdf from "react-to-pdf";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const ref = React.createRef();
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [14, 9],
  };
  const mobileOptions = {
    orientation: "portrait",
    unit: "in",
    format: [22, 6],
  };
  const { id, name, logo, details } = course;
  return (
    <div ref={ref}>
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-28 h-28" />
      </div>
      <h1 className="text-2xl font-bold text-center my-5 font-merienda">
        {name}
      </h1>
      <h2 className="text-xl font-bold text-center mb-5 md:block hidden">
        Detailed Course Outline
        <ReactToPdf
          targetRef={ref}
          filename={`${name} Course Outline.pdf`}
          options={options}
          x={-2}
          y={0.5}
          scale={1}
        >
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="pl-2"
              title="Download Course Outline"
            >
              <i class="fa-solid fa-download"></i>
            </button>
          )}
        </ReactToPdf>
      </h2>
      <h2 className="text-xl font-bold text-center mb-5 block md:hidden">
        Detailed Course Outline
        <ReactToPdf
          targetRef={ref}
          filename={`${name} Course Outline.pdf`}
          options={mobileOptions}
          x={0.5}
          y={0.5}
          scale={1}
        >
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="pl-2"
              title="Download Course Outline"
            >
              <i class="fa-solid fa-download"></i>
            </button>
          )}
        </ReactToPdf>
      </h2>
      <p className="text-lg font-semibold flex flex-col items-center">
        {details.map((detail) => (
          <>
            <p className="md:w-1/3 font-bold">{detail.name}</p>
            <p className="w-1/3 pl-10">
              {detail.steps.map((step) => (
                <p>
                  <i class="fa-solid fa-hashtag"></i>
                  {step}
                </p>
              ))}
            </p>
          </>
        ))}
      </p>
      <div className="text-center mt-5">
        <Link
          key={id}
          to={`/CheckOut/${id}`}
          className="border px-3 py-1 font-semibold text-lg rounded-lg hover:text-white hover:bg-indigo-500 font-merienda"
        >
          Get Premium Access
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
