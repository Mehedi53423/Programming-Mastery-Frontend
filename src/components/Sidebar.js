import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://programming-mastery-server-mehedi53423.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-full">
      {categories.map((category) => (
        <Link key={category.id} to={`/Course/${category.id}`}>
          <p className="px-4 py-2 border m-2 rounded-lg font-semibold text-lg hover:bg-indigo-500 hover:border-indigo-500 hover:text-white font-messiri">
            {category.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
