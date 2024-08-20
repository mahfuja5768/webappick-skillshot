import Container from "../shared/Container";
import SkillShootPic from "./SkillShootPic";
import SkillShootTexts from "./SkillShootTexts";

const SkillShoot = () => {
  return (
    <Container>
      <div className="grid grid-cols-5 justify-between gap-10 items-center my-20 px-2">
        <SkillShootPic />
        <SkillShootTexts />
      </div>
    </Container>
  );
};

export default SkillShoot;
