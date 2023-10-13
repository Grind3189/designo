import canadaImg from "../../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../../assets/shared/desktop/illustration-australia.svg";
import ukImg from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import circleImg from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import { Link } from "react-router-dom";

const Locations = () => {
  return (
    <section className="flex flex-col gap-12 max-md:my-[120px] xl:flex-row xl:items-center xl:justify-evenly">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="relative">
          <img src={canadaImg} alt="illustration of Canada" />
          <img
            src={circleImg}
            alt="circle image"
            className="absolute top-0 rotate-90"
          />
        </div>
        <h1 className="text-[20px] font-medium tracking-[5px]">CANADA</h1>
        <Link
          to="https://www.google.com/maps/place/Wellington+St+W,+Toronto,+ON,+Canada/@43.6440163,-79.3971143,17z/data=!3m1!4b1!4m6!3m5!1s0x882b34d9a0737d9f:0xbc1ae74f23fabf4e!8m2!3d43.6440163!4d-79.3945394!16s%2Fg%2F1vnrr797?entry=ttu"
          className="rounded-lg bg-peach-200 p-[18px] tracking-[1px] text-[#fff] lg:hover:bg-peach-100"
          target="_blank"
        >
          SEE LOCATION
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="relative">
          <img src={australiaImg} alt="illustration of Australia" />
          <img
            src={circleImg}
            alt="circle image"
            className="absolute top-0 rotate-90 xl:rotate-0"
          />
        </div>
        <h1 className="text-[20px] font-medium tracking-[5px]">AUSTRALIA</h1>
        <Link
          to="https://www.google.com/maps/place/19+Balonne+St,+Narrabri+NSW+2390,+Australia/@-30.3293985,149.7856596,17z/data=!3m1!4b1!4m6!3m5!1s0x6ba73450a680702d:0x44a309bd6607346e!8m2!3d-30.3293985!4d149.7882399!16s%2Fg%2F11crqw06vv?entry=ttu"
          className="rounded-lg bg-peach-200 p-[18px] tracking-[1px] text-[#fff] lg:hover:bg-peach-100"
          target="_blank"
        >
          SEE LOCATION
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="relative">
          <img src={ukImg} alt="illustration of United Kingdom" />
          <img
            src={circleImg}
            alt="circle image"
            className="absolute top-0 rotate-90 xl:-rotate-90"
          />
        </div>
        <h1 className="text-[20px] font-medium tracking-[5px]">
          United Kingdom
        </h1>
        <Link
          to="https://www.google.com/maps/place/13+Colorado+Way,+Castleford+WF10+4TA,+UK/@53.7102658,-1.3443296,17z/data=!3m1!4b1!4m6!3m5!1s0x487969f37e37e1c1:0x380058b15b7270a7!8m2!3d53.7102658!4d-1.3417493!16s%2Fg%2F11ghds4538?entry=ttu"
          className="rounded-lg bg-peach-200 p-[18px] tracking-[1px] text-[#fff] lg:hover:bg-peach-100"
          target="_blank"
        >
          SEE LOCATION
        </Link>
      </div>
    </section>
  );
};

export default Locations;
