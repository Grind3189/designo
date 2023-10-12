import circlePattern from "../../assets/shared/desktop/bg-pattern-three-circles.svg";

interface DetailsProp {
  country: string;
  officeName: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
}
const Details = ({
  country,
  officeName,
  street,
  city,
  province,
  postalCode,
  phone,
  email,
}: DetailsProp) => {
  return (
    <div className="relative flex flex-col gap-6 overflow-hidden bg-[#FDF3F0] px-6 py-[80px] text-center md:h-[326px] md:flex-row md:justify-between md:gap-[100px] md:rounded-[15px] md:px-[75px] md:text-left xl:w-[65%]">
      <div className="flex flex-col gap-6 md:w-[60%] md:justify-between xl:w-[unset]">
        <h1 className="text-[32px] font-medium text-peach-200 md:text-[40px]">
          {country}
        </h1>
        <p className="text-[15px] leading-[25px] md:text-[16px]">
          <span className="font-bold">{officeName}</span>
          <br />
          {street}
          <br />
          {city}, {province} {postalCode}
        </p>
      </div>
      <p className="text-[15px] leading-[25px] md:w-[40%] md:self-end md:text-[16px] xl:w-[unset]">
        <span className="font-bold">Contact</span>
        <br />P : {phone}
        <br />M : {email}
      </p>
      <img
        src={circlePattern}
        alt="three circle image"
        className="absolute left-[70px] top-[60px] scale-125 md:left-[50px] md:top-[-275px] md:scale-105"
      />
    </div>
  );
};

export default Details;
