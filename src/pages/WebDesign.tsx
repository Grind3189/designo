import ServiceIntro from "../components/services/ServiceIntro";
import ServiceListContainer from "../components/services/ServiceListContainer";
import WebDesignSamples from "../components/web-design/WebDesignSamples";
import Service from "../components/shared/Service";
import leafImg from '../assets/shared/desktop/bg-pattern-leaf.svg'

function WebDesign() {
  return (
    <main>
      <div className="relative">
        <ServiceIntro
          title="Web Design"
          description="We build websites that serve as powerful marketing tools 
        and bring memorable brand experiences."
        />
        <img src={leafImg} alt="leaf image" className="absolute hidden xl:block -z-20 top-[100px] left-[-180px]" />
      </div>

      <section className="max-md:px-6">
        <WebDesignSamples />
        <ServiceListContainer>
          <Service path="/app-design" title="App Design" />
          <Service path="/graphic-design" title="Graphic Design" />
        </ServiceListContainer>
      </section>
    </main>
  );
}

export default WebDesign;
