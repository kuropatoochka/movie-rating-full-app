import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.tsx";
import { MainPage } from "@/pages/main";
import { FavoritesPage } from "@/pages/favorites";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout/>,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage/> },
      { path: "/favorites", element: <FavoritesPage/> },
    ],
  },
])