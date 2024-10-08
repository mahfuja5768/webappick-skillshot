import { getImgUrl } from "../../utils/getImagePath";

const SkillShootTexts = () => {
  return (
    <div className=" lg:col-span-3 ">
      <h2 className="lg:text-5xl md:text-4xl text-3xl text-darkTitle font-semibold leading-relaxed text-center lg:text-start">
        Let us Skill Shoot
      </h2>
      <img
        className="absolute lg:right-1/3 
        "
        src={getImgUrl("title-line.png")}
        alt="title-line"
      />
      <p className="text-textLight lg:w-3/4 pt-12 leading-8">
        We are a company engaged in education with the aim of improving the
        skills of many people and so that younger people can reach the career
        paths they want.
      </p>
      <p className="text-textLight lg:w-3/4 mt-6 leading-8">
        we have been around since 2019 with currently 100+ updated materials and
        15K members who have joined.
      </p>
      <div className="grid grid-cols-2 gap-5 mt-8">
        <div className="flex items-center gap-5">
          <img
            className="w-[30px] h-[30px]"
            src={getImgUrl("skill1.png")}
            alt="skill1"
          />
          <h5
            className="text-xs lg:text-base

           font-semibold"
          >
            15K People Join
          </h5>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="w-[30px] h-[30px]"
            src={getImgUrl("skill2.png")}
            alt="skill1"
          />
          <h5
            className="text-xs lg:text-base
           font-semibold"
          >
            Trusted Mentor{" "}
          </h5>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="w-[30px] h-[30px]"
            src={getImgUrl("skill3.png")}
            alt="skill1"
          />
          <h5
            className="text-xs lg:text-base
           font-semibold"
          >
            30+ Free Videos{" "}
          </h5>
        </div>
        <div className="flex items-center gap-5">
          <img
            className="w-[30px] h-[30px]"
            src={getImgUrl("skill4.png")}
            alt="skill1"
          />
          <h5
            className="text-xs lg:text-base
           font-semibold"
          >
            100+ Premium Videos{" "}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SkillShootTexts;
