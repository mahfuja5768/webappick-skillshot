import { getImgUrl } from "../../utils/getImagePath";
import SectionTitle from "../shared/SectionTitle";

const WhyExistText = () => {
  return (
    <div className="col-span-2">
      <SectionTitle firstPart={"Why do we "} spanText={"exist?"} />
      <p className=" text-textLight my-6 leading-10">
        Because we know that many people or companies have the same problem when
        it comes to how difficult it is to improve their skills
      </p>
      <div
        className="flex items-center gap-3
      border-b-2 border-darkTitle/20 pb-6"
      >
        <img src={getImgUrl("existPerson.png")} alt="existPerson" />
        <div>
          <h4 className="text-lg font-semibold text-darkTitle">
            Jerony Pulquosta
          </h4>
          <p className=" text-xs">CEO Skill Shoot</p>
        </div>
      </div>

      <div className="flex gap-12 mt-12">
        <div>
          <h2 className="text-4xl font-bold text-darkTitle">100+</h2>{" "}
          <p className="text-textLight text-xs mt-3">Updated Material</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-darkTitle">15K</h2>{" "}
          <p className="text-textLight text-xs mt-3">Member Join </p>
        </div>
      </div>
    </div>
  );
};

export default WhyExistText;
