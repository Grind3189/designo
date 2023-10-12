import React from "react";

interface ServicesContainerProp {
  children: React.ReactNode;
}

const ServicesContainer = ({ children }: ServicesContainerProp) => {
  return (
    <div className="flex flex-col gap-10 md:gap-8 xl:grid xl:grid-cols-3 xl:gap-[30px] mb-[96px] md:mb-[120px] xl:mb-[160px]">
      {children}
    </div>
  );
};

export default ServicesContainer;
