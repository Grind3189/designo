import AppDesignSamples from "../components/app-design/AppDesignSamples.tsx";
import ServiceIntro from "../components/services/ServiceIntro";
import ServiceListContainer from "../components/services/ServiceListContainer.tsx";
import Service from "../components/shared/Service.tsx";

function AppDesign() {
  return (
    <main>
      <ServiceIntro
        description="Our mobile designs bring intuitive digital solutions
          to your customers right at their fingertips."
        title="App Design"
      />

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
