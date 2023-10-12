import GraphicDesignSamples from "../components/graphic-design/GraphicDesignSamples"
import ServiceIntro from "../components/services/ServiceIntro"
import ServiceListContainer from "../components/services/ServiceListContainer"
import Service from "../components/shared/Service"


function GraphicDesign() {
  return (
    <main>
      <ServiceIntro
        description="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives."
        title="Graphic Design"
      />

      <section className="max-md:px-6">
        <GraphicDesignSamples />
        <ServiceListContainer>
          <Service path="/app-design" title="App Design" />
          <Service path="/web-design" title="Web Design" />
        </ServiceListContainer>
      </section>
    </main>
  )
}

export default GraphicDesign