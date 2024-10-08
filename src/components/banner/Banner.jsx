import Container from "../shared/Container";
import BannerPic from "./BannerPic";
import BannerText from "./BannerText";

const Banner = () => {
  return (
    <div className="bg-primary mb-16 mt-12">
      <Container>
        <div className="grid lg:grid-cols-2 justify-between items-end">
          <BannerText />
          <BannerPic />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
