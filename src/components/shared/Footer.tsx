import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-light.png";
import SocMedFooter from "./SocMedFooter";
import ctaBgPattern from "../../assets/shared/desktop/bg-pattern-call-to-action.svg";

const Footer = () => {
  const location = useLocation()
  const isContactUs = location.pathname === '/contact-us'
  return (
    <footer className={`relative bg-black-200 px-6 pb-16 ${isContactUs ? "pt-16 md:pt-20 xl:pt-[72px] mt-0" : "pt-[290px] md:pt-[140px] mt-[311px] md:mt-[372px]"}  text-[#fff] md:px-[39px] md:pb-20 xl:pb-[72px]`}>
     {!isContactUs && <div className="absolute left-0 right-0 top-[-190px] md:top-[-260px] xl:top-[-205px]">
        <div
          className={`relative mx-auto flex w-[327px] flex-col gap-8 overflow-hidden rounded-[15px] bg-peach-200 px-6 py-16 text-center
            md:w-[690px] xl:w-[1111px] xl:flex-row xl:items-center xl:justify-between xl:px-[95px] xl:py-[72px] xl:text-left`}
        >
          <div className="z-10">
            <h1 className="mb-4 text-[32px] font-medium leading-[36px]">
              Let’s talk about <br />
              your project
            </h1>
            <p className="text-[15px] leading-[25px] md:mx-auto md:w-[400px]">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="z-10">
            <Link
              to="contact-us"
              className="inline-block rounded-lg bg-[#fff] px-[19px] py-[17px] font-medium text-black-200 lg:hover:bg-peach-100 lg:hover:text-[#fff]"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* background pattern */}
          <img
            src={ctaBgPattern}
            className="absolute left-[40px] scale-[2.5] md:left-0 md:top-0 md:scale-[1.7] xl:left-[230px] xl:top-[-150px] xl:scale-100"
          />
        </div>
      </div>}

      <div className="mb-10 flex flex-col items-center justify-center gap-8 md:relative md:flex-row md:justify-between md:pb-10 xl:mx-auto xl:w-[1111px]">
        <img src={logo} alt="image of our logo" className="h-[27px]" />
        <div className="w-full border-t border-t-black-100 md:absolute md:bottom-0" />
        <div className="flex flex-col gap-8 text-center text-[14px] uppercase tracking-[2px] md:flex-row">
          <Link to="about-us" className="lg:hover:text-peach-200">Our Company</Link>
          <Link to="locations" className="lg:hover:text-peach-200">Locations</Link>
          <Link to="contact-us" className="lg:hover:text-peach-200">Contact</Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 text-center leading-[26px] md:flex-row md:justify-between md:gap-0 md:text-left xl:mx-auto xl:w-[1111px]">
        <p className="opacity-50">
          <span className="font-bold">Designo Central Office</span> <br />
          3886 Wellington Street <br />
          Toronto, Ontario M9C 3J5
        </p>
        <p className="opacity-50 md:font-bold">
          <span className="font-bold">Contact Us (Central Office)</span> <br />
          P : +1 253-863-8967 <br />M : contact@designo.co
        </p>

        <div className="flex items-center gap-4 md:self-end">
          <SocMedFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
