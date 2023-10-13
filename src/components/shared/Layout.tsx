import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <div className="md:px-[39px] xl:mx-auto xl:w-[1111px] xl:px-0 z-50">
          <Header />
          <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
