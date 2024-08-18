import { getImgUrl } from "../../utils/getImagePath";

const WhyExistPoints = () => {
    return (
      <div className=" col-span-3 grid grid-cols-2 justify-between items-center gap-5">
        <div>
          <img src={getImgUrl("exist-ob1.png")} alt="" />
          <h3 className="text-3xl mt-6 font-semibold text-primary">
            Material Limitations
          </h3>
          <p className=" text-textLight my-3 leading-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <img src={getImgUrl("exist-obj2.png")} alt="" />
          <h3 className="text-3xl mt-6 font-semibold text-primary">
            Unprofessional Mentor{" "}
          </h3>
          <p className=" text-textLight my-3 leading-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <img src={getImgUrl("exist-obj3.png")} alt="" />
          <h3 className="text-3xl mt-6 font-semibold text-primary">
            Video Quality{" "}
          </h3>
          <p className=" text-textLight my-3 leading-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <img src={getImgUrl("exist-obj4.png")} alt="" />
          <h3 className="text-3xl mt-6 font-semibold text-primary">High Price </h3>
          <p className=" text-textLight my-3 leading-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    );
};

export default WhyExistPoints;