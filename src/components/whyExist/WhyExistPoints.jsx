import { getImgUrl } from "../../utils/getImagePath";

const WhyExistPoints = () => {
  return (
    <div className=" lg:col-span-3 grid lg:grid-cols-2 justify-between items-center gap-5">
      <div
        className="flex flex-col items-center
        lg:items-start
        "
      >
        <img
          className="w-[50px] h-[50px]"
          src={getImgUrl("exist-ob1.png")}
          alt=""
        />
        <h3 className="text-lg lg:text-3xl mt-6 font-semibold text-primary">
          Material Limitations
        </h3>
        <p className="text-textLight my-6 lg:leading-10 text-center lg:text-start leading-6 text-xs lg:text-lg w-full lg:w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div
        className="flex flex-col items-center
        lg:items-start
        "
      >
        <img
          className="w-[50px] h-[50px]"
          src={getImgUrl("exist-obj2.png")}
          alt=""
        />
        <h3 className="text-lg lg:text-3xl mt-6 font-semibold text-primary">
          Unprofessional Mentor{" "}
        </h3>
        <p className="text-textLight my-6 lg:leading-10 text-center lg:text-start leading-6 text-xs lg:text-lg w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div
        className="flex flex-col items-center
        lg:items-start
        "
      >
        <img
          className="w-[50px] h-[50px]"
          src={getImgUrl("exist-obj3.png")}
          alt=""
        />
        <h3 className="text-lg lg:text-3xl mt-6 font-semibold text-primary">
          Video Quality{" "}
        </h3>
        <p className="text-textLight my-6 lg:leading-10 text-center lg:text-start leading-6 text-xs lg:text-lg w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div
        className="flex flex-col items-center
        lg:items-start
        "
      >
        <img
          className="w-[50px] h-[50px]"
          src={getImgUrl("exist-obj4.png")}
          alt=""
        />
        <h3 className="text-lg lg:text-3xl mt-6 font-semibold text-primary">
          High Price{" "}
        </h3>
        <p className="text-textLight my-6 lg:leading-10 text-center lg:text-start leading-6 text-xs lg:text-lg w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default WhyExistPoints;
