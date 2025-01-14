import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AnimeCard from "../../pages/AnimeCard";
import Home from "../../pages/Home";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
      children: [
        {
          path: "anime/:id",
          element: <AnimeCard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
