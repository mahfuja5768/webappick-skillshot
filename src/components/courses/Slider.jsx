import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImgUrl } from "../../utils/getImagePath";
import Button from "../shared/Button";
import { courseData } from "../../utils/data";

const courses = courseData;
// console.log(courses);

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

const SliderCards = () => {
  const settings = {
    dots: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="relative lg:w-full w-[276px] mt-5 mx-auto">
      <Slider {...settings}>
        {courses?.map((course, index) => (
          <div key={index} className="px-4 py-6">
            <div className="bg-white lg:h-[527px] rounded-2xl shadow-lg">
              <img
                src={getImgUrl(course?.image)}
                alt={course?.title}
                className="lg:w-full lg:object-cover rounded-t-2xl mb-4"
              />
              <div
                className="py-4 px-5 flex flex-col gap-5
              "
              >
                <h3 className="text-sm lg:text-2xl font-semibold mb-2">
                  {course?.title}
                </h3>

                <div
                  className="grid grid-cols-2 gap-5 justify-between items-center

              "
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="w-[30px] h-[30px]"
                      src={getImgUrl(course?.instructor)}
                      alt="existPerson"
                    />
                    <div>
                      <h4 className="text-[10px] lg:text-sm font-medium text-darkTitle">
                        {course?.instructor}
                      </h4>
                      <p className="text-[7px] lg:text-[10px]">
                        {course?.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="w-[23px] h-[23px]"
                      src={getImgUrl("person.png")}
                      alt="person"
                    />
                    <div>
                      <h4
                        className="text-base
                        text-[10px] font-medium text-darkTitle"
                      >
                        {course?.participants}
                      </h4>
                      <p className="text-[8px] lg:text-[10px]">Participants</p>
                    </div>
                  </div>
                </div>
                <div
                  className="grid grid-cols-2 gap-5 justify-between items-center

              "
                >
                  <div className="flex items-center gap-3">
                    <Button text={"Buy Now"} />
                  </div>
                  <div className="flex items-center">
                    <h2 className="text-base lg:text-4xl font-semibold text-darkTitle">
                      $120
                    </h2>
                    <p className="text-textLight text-[8px] lg:text-xs mt-3">
                      /25 Video
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCards;
