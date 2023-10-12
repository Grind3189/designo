
import ServicesContainer from "../services/ServicesContainer";
import ServiceSample from "../services/ServiceSample";
import airFilterImg from "../../assets/app-design/desktop/image-airfilter.jpg";
import eyecamImg from '../../assets/app-design/desktop/image-eyecam.jpg'
import faceItImg from '../../assets/app-design/desktop/image-faceit.jpg'
import todoImg from '../../assets/app-design/desktop/image-todo.jpg'
import loopstudiosImg from '../../assets/app-design/desktop/image-loopstudios.jpg'

const AppDesignSamples = () => {
  return (
    <ServicesContainer>
      <ServiceSample
        image={airFilterImg}
        serviceDesc="Solving the problem of poor indoor air quality by filtering the air"
        serviceTitle="AIRFILTER"
      />
      <ServiceSample
        image={eyecamImg}
        serviceDesc="Product that lets you edit your favorite photos and videos at any time"
        serviceTitle="EYECAM"
      />
      <ServiceSample
        image={faceItImg}
        serviceDesc="Get to meet your favorite internet superstar with the faceit app"
        serviceTitle="FACEIT"
      />
      <ServiceSample
        image={todoImg}
        serviceDesc="A todo app that features cloud sync with light and dark mode"
        serviceTitle="TODO"
      />
      <ServiceSample
        image={loopstudiosImg}
        serviceDesc="A VR experience app made for Loopstudios"
        serviceTitle="LOOPSTUDIOS"
      />
    </ServicesContainer>
  );
};

export default AppDesignSamples;
