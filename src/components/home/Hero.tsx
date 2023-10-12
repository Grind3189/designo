import { Link } from "react-router-dom";
import heroImg from "../../assets/home/desktop/image-hero-phone.png";
import bgPattern from "../../assets/home/desktop/bg-pattern-hero-home.svg";
const Hero = () => {
  return (
    <section className="bg-peach-200 max-md:-z-10 relative flex h-[680px] flex-col overflow-hidden px-6 text-[#FFFFFF] md:rounded-[15px] xl:flex-row xl:justify-center xl:items-center xl:pl-[95px] xl:pr-0">
      <div className="z-10 mt-[80px] text-center md:mt-[60px] xl:flex-1 xl:text-left xl:mt-0">
        <h1 className="mb-[14px] text-[32px] font-medium leading-[36px] md:text-[48px] md:leading-[48px]">
          Award-winning custom <br />
          designs and digital <br />
          branding solutions
        </h1>
        <p className="mx-auto mb-6 w-[327px] text-[15px] leading-[25px] md:w-[445px] md:text-[16px] xl:mx-0 xl:my-10">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link
          to=""
          className="text-black-100 mx-auto grid h-[56px] w-[152px] place-items-center rounded-lg bg-[#FFFFFF] font-medium uppercase tracking-[1px] xl:mx-0 lg:hover:bg-peach-100 lg:hover:text-[#fff]"
        >
          Learn More
        </Link>
      </div>
      <img
        src={heroImg}
        alt="phone image"
        className="max-xl:absolute left-0 right-0 top-[380px] z-10 mx-auto h-[500px] w-[400px] object-cover md:w-[450px] md:h-[550px] md:top-[340px] xl:flex-1 xl:mr-[-13px] xl:mt-[200px] xl:h-[950px]"
      />
      <img
        src={bgPattern}
        alt="circle image for background"
        className="absolute right-[-150px] top-[240px] z-0 scale-[1.7] md:scale-[unset] md:top-[100px] xl:top-0 xl:right-0"
      />
    </section>
  );
};

export default Hero;
