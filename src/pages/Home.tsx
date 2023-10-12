import Attitudes from "../components/home/Attitudes";
import Hero from "../components/home/Hero";
import leafImage from "../assets/shared/desktop/bg-pattern-leaf.svg";
import ServiceList from "../components/home/ServiceList";

function Home() {
  return (
    <main>
      <Hero />
      <section className="max-md:px-6">
        <ServiceList />
        <div className="relative">
          <Attitudes />
          <img
            src={leafImage}
            className="absolute right-[-220px] top-[120px] -z-50 rotate-180 max-xl:hidden"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
