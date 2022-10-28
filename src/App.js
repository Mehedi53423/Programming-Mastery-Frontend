import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Home from "./components/Home";

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
          path: "/Home",
          // loader: async () => {
          //   return fetch("https://openapi.programming-hero.com/api/quiz");
          // },
          element: <Home></Home>,
        },
        { path: "/Blog", element: <Blog></Blog> },
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
