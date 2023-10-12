import circlePatternImg from '../../assets/web-design/desktop/bg-pattern-intro-web.svg';

interface ServiceIntroProp {
  title: string
  description: string
}

const ServiceIntro = ({title, description}: ServiceIntroProp) => {
  return (
    <div className="relative -z-10 grid h-[320px] place-items-center overflow-hidden bg-peach-200 px-6 text-center text-[#fff] md:h-[252px] md:rounded-[15px] mb-[96px] md:mb-[120px] xl:mb-[160px]">
      <div className="z-10">
        <h1 className="mb-6 text-[32px] font-medium md:text-[48px]">
          {title}
        </h1>
        <p className="max-w-[350px] leading-[25px] md:max-w-[400px]">
          {description}
        </p>
      </div>
      <img
        src={circlePatternImg}
        alt="circle pattern image"
        className="absolute right-[250px] top-[-120px] scale-[2.5] md:right-[-10%] md:scale-[1] xl:left-[unset] xl:right-[5px] xl:top-[-150px]"
      />
    </div>
  );
};

export default ServiceIntro;
