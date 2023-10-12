import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import AboutUs from "./pages/AboutUs";
import Locations from "./pages/Locations";

function App() {
  const location = useLocation();

  useEffect(() => {
    const goToTop = () => window.scrollTo(0, 0);
    goToTop();
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="web-design" element={<WebDesign />} />
        <Route path="app-design" element={<AppDesign />} />
        <Route path="graphic-design" element={<GraphicDesign />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="locations" element={<Locations />} />
      </Route>
    </Routes>
  );
}

export default App;
