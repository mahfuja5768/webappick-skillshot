import { priceData } from "../utils/data";
import { getImgUrl } from "../utils/getImagePath";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";

const PricingCards = () => {
  const pricingData = priceData;

  return (
    <div id="about">
      <Container>
        <SectionTitle
          isCenter
          spanText={"Subscribe"}
          secondPart={" with us now "}
        />
        <p className="text-gray-500 leading-10 text-center lg:w-1/2 mx-auto mt-3">
          By subscribing now, you will be able to access the material easily and
          cheaply, so you will be very efficient and benefit.
        </p>

        <div
          className="grid grid-cols-1 lg:grid-cols-3
      gap-4
      mt-12 space-x-6 mb-12 lg:mb-20"
        >
          {pricingData?.plans?.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan?.title === "Pro"
                  ? "bg-primary text-white relative shadow-primary shadow-2xl "
                  : " text-gray-700"
              } py-14 px-6 rounded-3xl`}
            >
              {plan?.label && (
                <span className="absolute top-5 right-5 bg-secondary rounded-full text-white px-5 py-1.5 text-[10px] font-semibold">
                  {plan.label.toUpperCase()}
                </span>
              )}
              <h3 className=" font-bold">
                <span className="text-4xl"> {plan.price}</span>
                <span
                  className={`font-normal text-textLight${
                    plan.title === "Pro" && "text-white"
                  }`}
                >
                  / {plan.duration}
                </span>
              </h3>
              <h4 className="text-3xl font-semibold mt-2">{plan.title}</h4>
              <p
                className={`mt-4 ${
                  plan.title === "Pro" ? "" : "text-textLight"
                }`}
              >
                {plan.description}
              </p>
              <ul className="text-left mt-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <img
                      className={`p-1  rounded-full ${
                        plan.title === "Pro" ? "bg-white/20" : "bg-[#5243C2]/10"
                      }`}
                      src={
                        plan.title === "Pro"
                          ? getImgUrl("tik.png")
                          : getImgUrl("greenTik.png")
                      }
                      alt="tik"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-6 py-3 px-4 rounded-full font-semibold ${
                  plan.title === "Pro"
                    ? "bg-secondary hover:bg-secondary/20"
                    : "bg-[#FED1BA]/10 text-[#FDC2A5] hover:bg-secondary hover:text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PricingCards;
