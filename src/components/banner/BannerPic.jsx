import { getImgUrl } from "../../utils/getImagePath";

const BannerPic = () => {
  return (
    <div className="relative flex justify-center items-center">
      <img
        className="absolute right-4 top-52"
        src={getImgUrl("bannerPlay.png")}
        alt="bannerPlay"
      />
      <img
        className=" absolute  left-4 top-10"
        src={getImgUrl("bannerPen.png")}
        alt="bannerPen"
      />
      <img
        className=" absolute  right-5 bottom-10"
        src={getImgUrl("bannerDate.png")}
        alt="bannerDate"
      />
      <img
        className="w-[408px] h-[541px]"
        src={getImgUrl("bannerPerson.png")}
        alt="bannerPerson"
      />
      <div className="bg-white/70 px-4 py-3 rounded-xl z-50 absolute top-1/2 left-0 flex justify-between gap-3">
        <img className="w-10 h-10" src={getImgUrl("client.png")} alt="client" />
        <div>
          <h4 className="text-xs font-semibold">Learn basic ui ux design</h4>
          <h5
            className="text-[10px] text-[#2C2C2C
    ]/70"
          >
            Today at 12 PM
          </h5>
          <button
            onClick={onclick}
            className="flex justify-center items-center gap-3
           px-2 py-1 my-3 bg-[#FF4F8E] rounded font-semibold text-xs   duration-300 text-white hover:bg-gradient-to-r hover:bg-[#FF4F8E]/80"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerPic;
