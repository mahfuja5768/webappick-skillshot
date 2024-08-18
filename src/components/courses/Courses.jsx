import Container from "../shared/Container";
import SliderCards from "./Slider";

const Courses = () => {
  return (
    <div className="my-12 bg-primary py-20 flex justify-center items-center">
      <Container>
        <h2 className="text-4xl font-semibold text-white text-center">
          Popular courses of the week{" "}
        </h2>
        <p className=" text-white leading-8 text-center w-1/2 mx-auto mt-3">
          List of the most popular lists that are often studied by our members
        </p>
        <SliderCards />
      </Container>
    </div>
  );
};

export default Courses;
