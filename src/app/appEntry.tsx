import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter.tsx";
import { Provider } from "react-redux";
import '@/shared/index.css';
import { store } from "@/shared/store/store.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)