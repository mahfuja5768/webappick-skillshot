import Button from "./shared/Button";
import Container from "./shared/Container";
import SectionTitle from "./shared/SectionTitle";

const JoinNow = () => {
  return (
    <div id="subscribe">
      <Container>
        <div className="py-10 lg:py-20 grid lg:grid-cols-5 justify-between items-center bg-[#F2E7DB] lg:mt-48 mb-12 lg:mb-24 px-5 lg:px-12 rounded-xl">
          <div className="lg:col-span-3">
            <SectionTitle
              spanText={"Improve"}
              secondPart={
                " your skills, and reach your career as soon as possible"
              }
            />
          </div>

          <div
            className="lg:col-span-2 mt-5
         flex flex-col lg:flex-row items-center justify-end gap-2 lg:gap-5"
          >
            <Button isOrange text={"Join Now"} />
            <Button text={"Subscribe Course"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinNow;
