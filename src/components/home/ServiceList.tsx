import Service from "../shared/Service";

const ServiceList = () => {
  return (
    <div className="xl: my-[120px] grid grid-rows-[repeat(3,250px)] gap-6 md:grid-rows-[repeat(3,200px)] xl:h-[640px] xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-[30px]">
      <div className="xl:row-start-1 xl:row-end-[-1]">
        <Service path="/web-design" title="Web Design" />
      </div>
      <Service path="/app-design" title="App Design" />
      <Service path="/graphic-design" title="Graphic Design" />
    </div>
  );
};

export default ServiceList;
