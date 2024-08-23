import { getImgUrl } from "../../utils/getImagePath";

const BannerText = () => {
  return (
    <div className="flex flex-col gap-6 relative py-[50px] ">
      <h2 className="lg:text-6xl md:text-4xl text-3xl text-white font-semibold leading-relaxed text-center lg:text-start">
        There is always something new for us to learn
      </h2>
      <img
        className="absolute right-0 lg:right-44 top-24 lg:top-32"
        src={getImgUrl("title-line.png")}
        alt="title-line"
      />
      <p className="text-white/60 lg:w-3/4 text-center leading-6 lg:text-start text-xs lg:text-lg">
        we have created more than 100+ materials on various things that will
        help your career, with mentors who are experienced in their fields.
      </p>
      <div className="flex flex-col lg:flow-row items-center gap-4">
        <button
          onClick={onclick}
          className="flex justify-center items-center gap-3
           lg:px-5 px-6 py-3 my-3 bg-secondary rounded font-medium   duration-300 text-white hover:bg-gradient-to-r hover:bg-secondary/80"
        >
          Start Journey
          <img src={getImgUrl("btnArrow.png")} alt="btnArrow" />
        </button>
        <div className="flex items-center gap-3">
          <a href="" target="blank">
            <img src={getImgUrl("insta.png")} alt="insta" />
          </a>
          <a href="" target="blank">
            <img src={getImgUrl("twitt.png")} alt="twitt" />
          </a>
          <a href="" target="blank">
            <img src={getImgUrl("discord.png")} alt="discord" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerText;
