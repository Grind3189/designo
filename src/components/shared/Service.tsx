import arrowIc from "../../assets/shared/desktop/icon-right-arrow.svg";
import { Link } from "react-router-dom";

interface ServiceProp {
  path: string;
  title: string;
}
const Service = ({ path, title }: ServiceProp) => {
  return (
    <Link
      to={path}
      className={`relative flex h-full flex-col items-center justify-center
       gap-3 overflow-hidden rounded-[15px] border bg-cover font-medium uppercase text-[#fff]
       ${
         path === "/web-design"
           ? "bg-web-design-sm md:bg-web-design-md xl:bg-web-design-lg"
           : path === "/app-design"
           ? "bg-app-design-sm md:bg-app-design-md xl:bg-app-design-lg"
           : "bg-graphic-design-sm md:bg-graphic-design-md xl:bg-graphic-design-lg"
       }
       `}
    >
      <h1 className="z-10 text-[28px] tracking-[1.4px] peer">{title}</h1>
      <div className="z-10 flex items-center gap-4 peer">
        <span className="text-[15px] tracking-[5px]">View Projects</span>
        <img src={arrowIc} alt="arrow right icon" />
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-[#000]/50 transition ease-in-out delay-50 lg:hover:bg-peach-200/70 lg:peer-hover:bg-peach-200/70" />
    </Link>
  );
};

export default Service;
