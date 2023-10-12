import ServiceIntro from "../components/services/ServiceIntro";
import ServiceListContainer from "../components/services/ServiceListContainer";
import WebDesignSamples from "../components/web-design/WebDesignSamples";
import Service from "../components/shared/Service";

function WebDesign() {
  return (
    <main>
      <ServiceIntro
        title="Web Design"
        description="We build websites that serve as powerful marketing tools 
        and bring memorable brand experiences."
      />

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
