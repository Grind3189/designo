import logo from "../../assets/shared/desktop/logo-dark.png";
import hamburgerIc from "../../assets/shared/mobile/icon-hamburger.svg";
import closeIc from "../../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if( window.innerWidth >= 768 ) {
        setShowNav(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
    window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  document.body.style.overflow = showNav ? "hidden" : "auto"
  return (
    <header className="z-50 h-[96px] px-6 py-9 md:flex md:h-[155px] md:items-center md:justify-between md:px-0 md:py-0 xl:px-0">
      <div className="flex items-center justify-between max-md:w-full">
        <Link to="/">
          <img src={logo} alt="logo image" className="h-[27px] object-cover" />
        </Link>
        {showNav ? (
          <img
            src={closeIc}
            alt="close icon"
            onClick={toggleNav}
            className="md:hidden"
          />
        ) : (
          <img
            src={hamburgerIc}
            alt="menu icon"
            onClick={toggleNav}
            className="md:hidden"
          />
        )}
      </div>

      <nav
        className={`bottom-0 left-0 right-0 top-[95px] z-50 transition-all max-md:fixed md:visible md:translate-x-0 md:opacity-100 ${
          showNav
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-1/2 opacity-0"
        }`}
      >
        <ul className="text-white-100 bg-black-200 md:text-black-100 flex h-[35%] flex-col justify-center gap-8 px-6 text-[24px] uppercase tracking-[2px] md:flex-row md:gap-10 md:bg-transparent md:px-0 md:text-[14px]">
          <li>
            <Link to="about-us" className="decoration-gray-600 lg:hover:underline">
              our company
            </Link>
          </li>
          <li>
            <Link to="locations" className="decoration-gray-600 lg:hover:underline">
              locations
            </Link>
          </li>
          <li>
            <Link to="contact-us" className="decoration-gray-600 lg:hover:underline">
              contact
            </Link>
          </li>
        </ul>
        <div
          className="h-[65%] bg-[#000000] opacity-50 md:hidden"
          onClick={toggleNav}
        />
      </nav>
    </header>
  );
};

export default Header;
