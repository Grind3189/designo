import Attitudes from "../components/home/Attitudes";
import Hero from "../components/home/Hero";
import leafImage from "../assets/shared/desktop/bg-pattern-leaf.svg";
import ServiceList from "../components/home/ServiceList";

function Home() {
  document.body.style.overflowX = "hidden"
  return (
    <main>
      <div className="relative">
        <Hero />
        <img
          src={leafImage}
          alt="leaf image"
          className="absolute bottom-[-300px] left-[-250px] -z-10 hidden xl:block"
        />
      </div>
      <section className="max-md:px-6">
        <ServiceList />
        <div className="relative">
          <Attitudes />
          <img
            src={leafImage}
            alt="leaf image"
            className="absolute right-[-200px] top-[120px] -z-50 rotate-180 max-xl:hidden"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
