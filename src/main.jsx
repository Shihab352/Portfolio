import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Layout/Root";
import Home from "./Layout/Home";
import About from "./Layout/About";
import Slider from "./Components/Slider";
import Skill from "./Layout/Skill";
import Project from "./Layout/project";
import Experience from "./Layout/Experience";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/skill',
        element: <Skill></Skill>
      },
      {
        path:'/project',
        element:<Project></Project>
      },
      {
        path:'/experience',
        element:<Experience></Experience>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);