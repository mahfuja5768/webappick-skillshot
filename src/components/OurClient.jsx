import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImgUrl } from "../utils/getImagePath";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";
import { clientData } from "../utils/data";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow right-arrow`}
      style={{
        ...style,
        display: "block",
        backgroundColor: "green",
        borderRadius: "50%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      }}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow left-arrow`}
      style={{
        ...style,
        display: "block",
        backgroundColor: "green",
        borderRadius: "50%",
      }}
      onClick={onClick}
    ></div>
  );
};

const OurClient = () => {
  const clientInfo = clientData?.infos;

  const settings = {
    dots: false, // Dots removed
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div
      id="
    testimoni"
      className="bg-[#F8F8F8] py-20"
    >
      <Container>
        <SectionTitle isCenter firstPart="What do they" spanText="say?" />
        <p className="text-gray-500 leading-10 text-center w-1/2 mx-auto mt-3">
          This is an honest review from members who have joined us
        </p>

        <div className="relative w-full mx-auto mt-10">
          <Slider {...settings}>
            {clientInfo?.map((info, index) => (
              <div key={index} className="px-4 py-6">
                <div className="bg-white h-[450px] rounded-2xl shadow-lg p-6">
                  <img
                    src={getImgUrl(info?.img)}
                    alt={info?.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                  />
                  <div className="text-center">
                    <h4 className="text-2xl font-semibold mb-2">
                      {info?.name}
                    </h4>
                    <p className="text-gray-500 mb-4">{info?.description}</p>
                    <img
                      src={getImgUrl("stars.png")}
                      alt="Rating stars"
                      className="mx-auto mb-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default OurClient;
