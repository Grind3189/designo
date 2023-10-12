import Hero from "../components/about-us/Hero";
import WorldClass from "../components/about-us/WorldClass";
import leafImg from "../assets/shared/desktop/bg-pattern-leaf.svg";
import Location from "../components/about-us/Location";
import RealDeal from "../components/about-us/RealDeal";

function AboutUs() {
  return (
    <main className="flex flex-col md:mx-auto md:gap-[120px] md:max-xl:w-[689px] xl:gap-[160px]">
      <div className="relative -z-10">
        <Hero />
        <img
          src={leafImg}
          alt="leaf image"
          className="absolute bottom-[-430px] left-[-200px] -z-20 hidden xl:block"
        />
      </div>
      <WorldClass />
      <div className="relative -z-10">
        <Location />
        <img src={leafImg} alt="leaf image" className="absolute -z-20 bottom-[-380px] right-[-550px]" />
      </div>
      <RealDeal />
    </main>
  );
}

export default AboutUs;
