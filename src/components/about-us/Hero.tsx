import heroBgPattern from "../../assets/about/mobile/bg-pattern-hero-about-mobile.svg";
const Hero = () => {
  return (
    <section className="md:rounded-[15px] overflow-hidden xl:flex xl:flex-row-reverse xl:h-[480px]">
      <div className="bg-about-hero-sm md:bg-about-hero-md h-[320px] w-full bg-cover xl:h-full xl:bg-about-hero-lg xl:flex-1" />
      <div className="relative -z-10 flex flex-col gap-6 bg-peach-200 px-6 py-[80px] text-center text-[#fff] md:px-[58px] md:py-16 xl:justify-center xl:text-left xl:flex-1">
        <h1 className="z-10 text-[32px] font-medium md:text-[48px]">
          About Us
        </h1>
        <p className="z-10 leading-[25px] max-md:text-[15px] md:mx-auto md:w-[600px] xl:w-full">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>

        {/* bg circle pattern */}
        <img
          src={heroBgPattern}
          alt="circle background pattern"
          className="absolute right-[250px] top-[150px] -z-0 scale-[2.4] md:left-[-670px] md:top-[190px] xl:left-[-680px] xl:top-[550px] xl:scale-[3.2]"
        />
      </div>
    </section>
  );
};

export default Hero;
