import canadaImg from "../../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../../assets/shared/desktop/illustration-australia.svg";
import ukImg from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import circleImg from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <section className="max-md:my-[120px] flex flex-col gap-12 xl:flex-row xl:items-center xl:justify-evenly">

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="relative">
          <img src={canadaImg} alt="illustration of Canada" />
          <img src={circleImg} alt="circle image" className="absolute top-0 rotate-90" />
        </div>
        <h1 className="text-[20px] font-medium tracking-[5px]">CANADA</h1>
        <Link to="" className="bg-peach-200 text-[#fff] p-[18px] tracking-[1px] rounded-lg lg:hover:bg-peach-100">SEE LOCATION</Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="relative">
          <img src={australiaImg} alt="illustration of Australia" />
          <img src={circleImg} alt="circle image" className="absolute top-0 rotate-90 xl:rotate-0" />
        </div>
        <h1 className="text-[20px] font-medium tracking-[5px]">AUSTRALIA</h1>
        <Link to="" className="bg-peach-200 text-[#fff] p-[18px] tracking-[1px] rounded-lg lg:hover:bg-peach-100">SEE LOCATION</Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="relative">
          <img src={ukImg} alt="illustration of United Kingdom" />
          <img src={circleImg} alt="circle image" className="absolute top-0 rotate-90 xl:-rotate-90" />
        </div>
        <h1 className="text-[20px] font-medium tracking-[5px]">United Kingdom</h1>
        <Link to="" className="bg-peach-200 text-[#fff] p-[18px] tracking-[1px] rounded-lg lg:hover:bg-peach-100">SEE LOCATION</Link>
      </div>

    </section>
  );
};

export default Location;
