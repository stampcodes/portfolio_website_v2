const Hero = () => {
  return (
    <div className="bg-[url('./assets/imgs/bg/bg-mobile-hero.png')] lg:bg-[url('./assets/imgs/bg/bg.png')] bg-boiler pt-[100px] bg-scroll lg:bg-fixed">
      <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold pl-8 md:pl-[100px] pt-[150px] ">
        Hi, I'm <span className="text-[#00ff9d]">Andrea!</span>
        <br />
        Focused on Web Development
      </h1>
    </div>
  );
};

export default Hero;
