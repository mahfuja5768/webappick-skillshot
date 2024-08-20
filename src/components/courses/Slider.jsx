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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    <div className="relative w-full mx-auto">
      <Slider {...settings}>
        {courses?.map((course, index) => (
          <div key={index} className="px-4 py-6">
            <div className="bg-white h-[527px] rounded-2xl shadow-lg">
              <img
                src={getImgUrl(course?.image)}
                alt={course?.title}
                className="w-full  object-cover rounded-t-2xl mb-4"
              />
              <div
                className="py-4 px-5 flex flex-col gap-5
              "
              >
                <h3 className="text-2xl font-semibold mb-2">{course?.title}</h3>

                <div
                  className="grid grid-cols-2 gap-5 justify-between items-center

              "
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={getImgUrl(course?.instructor)}
                      alt="existPerson"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-darkTitle">
                        {course?.instructor}
                      </h4>
                      <p className=" text-[10px]">{course?.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={getImgUrl("person.png")} alt="person" />
                    <div>
                      <h4 className="font-medium text-darkTitle">
                        {course?.participants}
                      </h4>
                      <p className=" text-[10px]">Participants</p>
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
                    <h2 className="text-4xl font-semibold text-darkTitle">
                      $120
                    </h2>
                    <p className="text-textLight text-xs mt-3">/25 Video</p>
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
