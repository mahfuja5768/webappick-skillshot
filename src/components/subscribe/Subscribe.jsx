import Container from "../shared/Container";
import SubscribePic from "./SubscribePic";
import SubscribeText from "./SubscribeText";

const Subscribe = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 justify-between items-center bg-[#F2E7DB] mb-12 mt-48 px-12 py-12 lg:py-0 rounded-xl">
        <SubscribeText />
        <SubscribePic />
      </div>
    </Container>
  );
};

export default Subscribe;
