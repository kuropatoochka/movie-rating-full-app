import { Outlet } from "react-router-dom";
import Header from "@/widgets/header/ui/Header/Header.tsx";
import Footer from "@/widgets/footer/ui/Footer/Footer.tsx";

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