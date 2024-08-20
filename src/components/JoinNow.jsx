import Button from "./shared/Button";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";

const JoinNow = () => {
  return (
    <Container>
      <div className="py-20 grid grid-cols-5 justify-between items-center bg-[#F2E7DB] mt-48 mb-24 px-12 rounded-xl">
        <div
          className=" col-span-3"
        >
          <SectionTitle
            spanText={"Improve"}
            secondPart={
              " your skills, and reach your career as soon as possible"
            }
          />
        </div>

        <div
          className="col-span-2
         flex items-center justify-end gap-5"
        >
          <Button isOrange text={"Join Now"} />
          <Button text={"Subscribe Course"} />
        </div>
      </div>
    </Container>
  );
};

export default JoinNow;
