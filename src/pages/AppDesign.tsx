import AppDesignSamples from "../components/app-design/AppDesignSamples.tsx";
import ServiceIntro from "../components/services/ServiceIntro";
import ServiceListContainer from "../components/services/ServiceListContainer.tsx";
import Service from "../components/shared/Service.tsx";
import leafImg from "../assets/shared/desktop/bg-pattern-leaf.svg";

function AppDesign() {
  return (
    <main>
      <div className="relative">
        <ServiceIntro
          description="Our mobile designs bring intuitive digital solutions
          to your customers right at their fingertips."
          title="App Design"
        />
        <img
          src={leafImg}
          alt="leaf image"
          className="absolute left-[-200px] top-[160px] -z-20 hidden xl:block"
        />
      </div>

      <section className="max-md:px-6">
        <AppDesignSamples />
        <ServiceListContainer>
          <Service path="/web-design" title="Web Design" />
          <Service path="/graphic-design" title="Graphic Design" />
        </ServiceListContainer>
      </section>
    </main>
  );
}

export default AppDesign;
