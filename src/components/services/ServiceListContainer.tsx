import React from "react";

interface ServiceListContainerProp {
  children: React.ReactNode;
}

const ServiceListContainer = ({ children }: ServiceListContainerProp) => {
  return (
    <div className="grid grid-rows-[250px_250px] gap-6 md:grid-rows-[200px_200px] xl:grid-cols-2 xl:grid-rows-[308px] xl:gap-[30px]">
      {children}
    </div>
  );
};

export default ServiceListContainer;
