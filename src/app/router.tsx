import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import { Post } from "../pages/post";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/posts/:id",
        element: <Post />,
    },
    {
        path: "*",
        element: <Home />,
    },
]);
