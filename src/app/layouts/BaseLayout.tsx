import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header/ui";
import { Footer } from "@/widgets/Footer/ui";

function BaseLayout() {
  return (
    <>
      <Header/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default BaseLayout