import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

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