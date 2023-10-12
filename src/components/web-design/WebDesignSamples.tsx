
import ServicesContainer from "../services/ServicesContainer";
import ServiceSample from "../services/ServiceSample";
import expressImg from "../../assets/web-design/desktop/image-express.jpg";
import transferImg from '../../assets/web-design/desktop/image-transfer.jpg'
import photonImg from '../../assets/web-design/desktop/image-photon.jpg'
import builderImg from '../../assets/web-design/desktop/image-builder.jpg'
import blogrImg from '../../assets/web-design/desktop/image-blogr.jpg'
import campImg from '../../assets/web-design/desktop/image-camp.jpg'

const WebDesignSamples = () => {
  return (
    <ServicesContainer>
      <ServiceSample
        image={expressImg}
        serviceDesc="A multi-carrier shipping website for ecommerce businesses"
        serviceTitle="EXPRESS"
      />
      <ServiceSample
        image={transferImg}
        serviceDesc="Site for low-cost money transfers and sending money within seconds"
        serviceTitle="TRANSFER"
      />
      <ServiceSample
        image={photonImg}
        serviceDesc="A state-of-the-art music player with high-resolution audio and DSP effects"
        serviceTitle="PHOTON"
      />
      <ServiceSample
        image={builderImg}
        serviceDesc="Connects users with local contractors based on their location"
        serviceTitle="BUILDER"
      />
      <ServiceSample
        image={blogrImg}
        serviceDesc="Blogr is a platform for creating an online blog or publication"
        serviceTitle="BLOGR"
      />
      <ServiceSample
        image={campImg}
        serviceDesc="Get expert training in coding, data, design, and digital marketing"
        serviceTitle="CAMP"
      />
    </ServicesContainer>
  );
};

export default WebDesignSamples;
