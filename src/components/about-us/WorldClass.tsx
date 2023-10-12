import bgPatternCircle from "../../assets/shared/desktop/bg-pattern-three-circles.svg";

const WorldClass = () => {
  return (
    <section className="overflow-hidden md:rounded-[15px] xl:flex xl:h-[640px]">
      <div className="h-[320px] bg-world-class-sm bg-cover md:bg-world-class-md xl:h-full xl:w-[40%] xl:bg-world-class-lg" />
      <div className="relative flex flex-col gap-6 overflow-hidden bg-[#FDF3F0] px-6 py-[80px] text-center md:px-[58px] md:py-[68px] xl:w-[60%] xl:justify-center xl:text-left xl:px-[96px]">
        <h1 className="text-[32px] font-medium text-peach-200 md:text-[40px]">
          World-class talent
        </h1>
        <p className="text-[15px] leading-[25px] md:text-[16px]">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms. <br />
          <br />
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
        <img
          src={bgPatternCircle}
          alt="three circle pattern for background"
          className="absolute left-[80px] top-[-210px] scale-150 md:scale-100 xl:top-[unset] xl:left-[-160px] xl:bottom-0"
        />
      </div>
    </section>
  );
};

export default WorldClass;
