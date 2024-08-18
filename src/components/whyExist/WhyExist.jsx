import Container from "../shared/Container";
import WhyExistPoints from "./WhyExistPoints";
import WhyExistText from "./WhyExistText";

const WhyExist = () => {
    return (
      <Container>
        <div className="grid grid-cols-5 justify-between gap-10 items-center my-20 px-2">
          <WhyExistText />
          <WhyExistPoints />
        </div>
      </Container>
    );
};

export default WhyExist;