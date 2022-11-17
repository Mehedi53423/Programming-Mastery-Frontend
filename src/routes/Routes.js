import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../components/Blog";
import Course from "../components/Course";
import Courses from "../components/Courses";
import Error from "../components/Error";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import UserProfile from "../components/UserProfile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Home",
        element: <Home></Home>,
      },
      {
        path: "Course/:id",
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Courses/${params.id}`),
      },
      {
        path: "Courses",
        element: <Courses></Courses>,
        loader: () => fetch(`http://localhost:5000/categories`),
      },
      { path: "FAQ", element: <FAQ></FAQ> },
      { path: "Blog", element: <Blog></Blog> },
      { path: "Login", element: <Login></Login> },
      { path: "Signup", element: <Signup></Signup> },
      { path: "UserProfile", element: <UserProfile></UserProfile> },
      { path: "*", element: <Error></Error> },
    ],
  },
]);
