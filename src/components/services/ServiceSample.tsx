
interface ServiceSampleProp {
  image: string
  serviceTitle: string
  serviceDesc: string
}

const ServiceSample = ({ image, serviceTitle, serviceDesc }: ServiceSampleProp) => {
  return (
    <div className="w-[327px] overflow-hidden rounded-[15px] max-xl:mx-auto md:flex md:h-[310px] md:w-[689px] md:items-center xl:h-[478px] xl:w-[350px] xl:flex-col">
      <img
        src={image}
        alt="express website image"
        className="object-cover md:w-[50%] xl:h-[70%] xl:w-full"
      />
      <div className="flex flex-col items-center justify-center gap-4 bg-[#FDF3F0] group lg:hover:bg-peach-200 px-[30px] py-8 text-center md:h-full md:w-[50%] md:gap-[14px] xl:h-[30%] xl:w-full">
        <h1 className="text-[20px] font-medium uppercase tracking-[5px] transition ease-in-out delay-30 text-peach-200 lg:group-hover:text-[#fff]">
          {serviceTitle}
        </h1>
        <p className="lg:group-hover:text-[#fff] leading-[26px]">{serviceDesc}</p>
      </div>
    </div>
  );
};

export default ServiceSample;
