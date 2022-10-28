import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Blog from "./components/Blog";
import Courses from "./components/Courses";
import Error from "./components/Error";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          // loader: async () => {
          //   return fetch("https://openapi.programming-hero.com/api/quiz");
          // },
          element: <Home></Home>,
        },
        {
          path: "Home",
          // loader: async () => {
          //   return fetch("https://openapi.programming-hero.com/api/quiz");
          // },
          element: <Home></Home>,
        },
        { path: "Courses", element: <Courses></Courses> },
        { path: "FAQ", element: <FAQ></FAQ> },
        { path: "Blog", element: <Blog></Blog> },
        { path: "Login", element: <Login></Login> },
        { path: "Signup", element: <Signup></Signup> },
        { path: "*", element: <Error></Error> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
