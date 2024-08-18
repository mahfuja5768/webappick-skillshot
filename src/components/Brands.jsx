import { getImgUrl } from "../utils/getImagePath";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";

const Brands = () => {
  return (
    <Container>
      <SectionTitle
        isCenter
        firstPart={"Trusted more than"}
        spanText={" 100+  "}
        secondPart={"in the world"}
      />
      <p className=" text-textLight leading-10 text-center w-1/2 mx-auto mt-3">
        they have asked us more than 3 times to teach their employees about
        various things. to improve their skills
      </p>
      <div
        className="
      flex justify-center items-center gap-16"
      >
        <img src={getImgUrl("uber.png")} alt="uber" />
        <img src={getImgUrl("google.png")} alt="google" />
        <img src={getImgUrl("paypal.png")} alt="paypal" />
        <img src={getImgUrl("micro.png")} alt="micro" />
        <img src={getImgUrl("dribble.png")} alt="dribble" />
      </div>
    </Container>
  );
};

export default Brands;
