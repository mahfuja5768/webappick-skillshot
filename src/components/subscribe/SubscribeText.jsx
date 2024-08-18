import Button from "../shared/Button";
import SectionTitle from "../shared/SectionTitle";

const SubscribeText = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionTitle
        firstPart={"Happy  "}
        spanText={"Chinese New Year "}
        secondPart={"20% discount for you today"}
      />
      <Button text={"Subscribe Course"} />
    </div>
  );
};

export default SubscribeText;
