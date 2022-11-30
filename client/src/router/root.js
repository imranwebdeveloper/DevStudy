import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../page/Blog";
import Checkout from "../page/Checkout";
import Courses from "../page/Courses";
import Details from "../page/Details";
import Error from "../page/Error";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import ProtectRouter from "./ProtectRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:id",
        element: <Details />,
        loader: async ({ params }) =>
          fetch(`https://dev-study-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "checkout/:id",
        element: (
          <ProtectRouter>
            <Checkout />,
          </ProtectRouter>
        ),
      },
      {
        path: "blog",
        element: <Blog />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
