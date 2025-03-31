import { createBrowserRouter, RouteObject } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.tsx";
import { MainPage } from "@/pages/main";
import { FavoritesPage } from "@/pages/favorites";
import { SearchPage } from "@/pages/search";

export const appRouter: RouteObject[] = createBrowserRouter([
  {
    element: <BaseLayout/>,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <MainPage/> },
      { path: "/favorites", element: <FavoritesPage/> },
      { path: "/search", element: <SearchPage/> }
    ],
  },
])