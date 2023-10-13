import GraphicDesignSamples from "../components/graphic-design/GraphicDesignSamples"
import ServiceIntro from "../components/services/ServiceIntro"
import ServiceListContainer from "../components/services/ServiceListContainer"
import Service from "../components/shared/Service"
import leafImg from '../assets/shared/desktop/bg-pattern-leaf.svg'

function GraphicDesign() {
  return (
    <main>
      <div className="relative">
      <ServiceIntro
        description="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives."
        title="Graphic Design"
      />
      <img src={leafImg} alt="leaf image" className="absolute top-[160px] left-[-200px] -z-20 hidden xl:block" />
      </div>

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