import passionateIllus from "../../assets/home/desktop/illustration-passionate.svg";
import resourcefulIllus from "../../assets/home/desktop/illustration-resourceful.svg";
import friendlyIllus from "../../assets/home/desktop/illustration-friendly.svg";
import circlePattern from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

const Attitudes = () => {
  return (
    <div className="flex flex-col gap-[80px] md:gap-8 xl:flex-row xl:items-center xl:justify-evenly xl:gap-[30px]">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:gap-12 md:text-left xl:flex-col xl:text-center">
        <div className="relative h-[202px] w-[202px]">
          <img src={passionateIllus} alt="" className="object-cover" />
          <img
            src={circlePattern}
            alt="circle pattern background"
            className="absolute top-0 -z-10"
          />
        </div>
        <div>
          <h1 className="mb-8 mt-12 text-[20px] font-medium uppercase tracking-[5px] md:mb-4 md:mt-0 xl:mb-8">
            Passionate
          </h1>
          <p className="max-w-[439px] leading-[26px] xl:max-w-[350px]">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:gap-12 md:text-left xl:flex-col xl:text-center">
        <div className="relative h-[202px] w-[202px]">
          <img src={resourcefulIllus} alt="" className="object-cover" />
          <img
            src={circlePattern}
            alt="circle pattern background"
            className="absolute top-0 -z-10"
          />
        </div>
        <div>
          <h1 className="mb-8 mt-12 text-[20px] font-medium uppercase tracking-[5px] md:mb-4 md:mt-0 xl:mb-8">
            Resourceful
          </h1>
          <p className="max-w-[439px] leading-[26px] xl:max-w-[350px]">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:gap-12 md:text-left xl:flex-col xl:text-center">
        <div className="relative h-[202px] w-[202px]">
          <img src={friendlyIllus} alt="" className="object-cover" />
          <img
            src={circlePattern}
            alt="circle pattern background"
            className="absolute top-0 -z-10"
          />
        </div>
        <div>
          <h1 className="mb-8 mt-12 text-[20px] font-medium uppercase tracking-[5px] md:mb-4 md:mt-0 xl:mb-8">
            Friendly
          </h1>
          <p className="max-w-[439px] leading-[26px] xl:max-w-[350px]">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attitudes;
