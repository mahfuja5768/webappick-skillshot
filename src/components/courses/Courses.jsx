import Container from "../shared/Container";
import SliderCards from "./Slider";

const Courses = () => {
  return (
    <div
      id="course"
      className="my-12 bg-primary py-20 flex justify-center items-center"
    >
      <Container>
        <h2 className="text-lg lg:text-4xl font-semibold text-white text-center">
          Popular courses of the week{" "}
        </h2>
        <p className="text-xs lg:text-base text-white leading-8 text-center lg:w-1/3 mx-auto mt-3">
          List of the most popular lists that are often studied by our members
        </p>
        <SliderCards />
      </Container>
    </div>
  );
};

export default Courses;
