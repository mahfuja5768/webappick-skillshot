import { getImgUrl } from "../../utils/getImagePath";
import SectionTitle from "../shared/SectionTitle";

const WhyExistText = () => {
  return (
    <div className="lg:col-span-2">
      <SectionTitle firstPart={"Why do we "} spanText={"exist?"} />
      <p className=" text-textLight my-6 lg:leading-10 text-center lg:text-start leading-6 text-xs lg:text-lg">
        Because we know that many people or companies have the same problem when
        it comes to how difficult it is to improve their skills
      </p>
      <div
        className="flex items-center gap-3
      border-b-2 justify-center lg:justify-start border-darkTitle/20 pb-6"
      >
        <img
          className="w-[50px] h-[50px]"
          src={getImgUrl("existPerson.png")}
          alt="existPerson"
        />
        <div>
          <h4 className="text-xs lg:text-lg font-semibold text-darkTitle">
            Jerony Pulquosta
          </h4>
          <p className="text-[10px] lg:text-xs">CEO Skill Shoot</p>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start gap-12 mt-12">
        <div
          className="flex flex-col items-center lg:items-start
        "
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-darkTitle ">
            100+
          </h2>{" "}
          <p className="text-textLight lg:text-xs mt-3 text-[10px]">
            Updated Material
          </p>
        </div>
        <div
          className="flex flex-col items-center lg:items-start
        "
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-darkTitle ">
            15K
          </h2>{" "}
          <p className="text-textLight lg:text-xs mt-3 text-[10px]">
            Member Join{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyExistText;
