import ServicesContainer from "../services/ServicesContainer";
import ServiceSample from "../services/ServiceSample";
import timBrownmImg from "../../assets/graphic-design/desktop/image-change.jpg";
import boxedWaterImg from "../../assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImg from "../../assets/graphic-design/desktop/image-science.jpg";

const GraphicDesignSamples = () => {
  return (
    <ServicesContainer>
      <ServiceSample
        image={timBrownmImg}
        serviceDesc="A book cover designed for Tim Brown’s new release, ‘Change’"
        serviceTitle="TIM BROWN"
      />
      <ServiceSample
        image={boxedWaterImg}
        serviceDesc="A simple packaging concept made for Boxed Water"
        serviceTitle="BOXED WATER"
      />
      <ServiceSample
        image={scienceImg}
        serviceDesc="A poster made in collaboration with the Federal Art Project"
        serviceTitle="SCIENCE!"
      />
    </ServicesContainer>
  );
};

export default GraphicDesignSamples;
