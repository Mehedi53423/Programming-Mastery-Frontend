import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="bottom-center" reverseOrder={true}></Toaster>
    </div>
  );
}

export default App;
