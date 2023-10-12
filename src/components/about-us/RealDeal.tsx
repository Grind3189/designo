import circleImg from '../../assets/shared/desktop/bg-pattern-three-circles.svg'
const RealDeal = () => {
  return (
    <section className='md:rounded-[15px] overflow-hidden xl:h-[640px] xl:flex xl:flex-row-reverse'>
      <div className="bg-real-deal-sm h-[320px] bg-cover md:bg-real-deal-md xl:bg-real-deal-lg xl:h-full xl:w-[40%]" />
      <div className="bg-[#FDF3F0] flex flex-col gap-6 pt-[80px] pb-[105px] text-center px-6 overflow-hidden relative md:pb-[94px] md:px-[60px] xl:w-[60%] xl:justify-center xl:text-left xl:py-0 xl:px-[95px]">
        <h1 className="text-[32px] font-medium text-peach-200 md:text-[40px]">The real deal</h1>
        <p className="text-[15px] leading-[25px]">
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success. <br />
          <br />
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
        <img src={circleImg} alt="three circle image" className='absolute scale-[1.7] left-[100px] md:bottom-[50px] md:scale-100 xl:bottom-0 xl:left-[20px]' />
      </div>
    </section>
  );
};

export default RealDeal;
