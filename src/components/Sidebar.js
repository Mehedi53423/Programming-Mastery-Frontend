import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-full">
      {categories.map((category) => (
        <p key={category.id} className="border mx-1 my-2 rounded-lg">
          <Link className="py-1 px-2 font-semibold text-lg">
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Sidebar;
