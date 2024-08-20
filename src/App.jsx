import Banner from "./components/banner/Banner";
import Brands from "./components/Brands";
import Courses from "./components/courses/Courses";
import JoinNow from "./components/JoinNow";
import PricingCards from "./components/PricingCards";
import SkillShoot from "./components/skillShoot/SkillShoot";
import Subscribe from "./components/subscribe/Subscribe";
import WhyExist from "./components/whyExist/WhyExist";

//TODO: add play pic in slider

const App = () => {
  return (
    <>
      <Banner />
      <Brands />
      <Subscribe />
      <WhyExist />
      <Courses />
      <SkillShoot />
      <JoinNow />
      <PricingCards />
    </>
  );
};

export default App;
