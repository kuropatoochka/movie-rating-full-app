import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter.tsx";
import { Provider } from "react-redux";
import { store } from "@/app/appStore.tsx";
import '@/shared/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)