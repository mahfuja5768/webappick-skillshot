import Container from "../shared/Container";
import BannerPic from "./BannerPic";
import BannerText from "./BannerText";

const Banner = () => {
  return (
    <div className="bg-primary mb-16">
      <Container>
        <div className="grid grid-cols-2 justify-between items-end">
          <BannerText />
        <BannerPic /></div>
      </Container>
    </div>
  );
};

export default Banner;
