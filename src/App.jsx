import Banner from "./components/banner/Banner";
import Brands from "./components/Brands";
import Courses from "./components/courses/Courses";
import JoinNow from "./components/JoinNow";
import OurClient from "./components/OurClient";
import PricingCards from "./components/PricingCards";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import SkillShoot from "./components/skillShoot/SkillShoot";
import Subscribe from "./components/subscribe/Subscribe";
import WhyExist from "./components/whyExist/WhyExist";


const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Brands />
      <Subscribe />
      <WhyExist />
      <Courses />
      <SkillShoot />
      <JoinNow />
      <PricingCards />
      <OurClient />
      <Footer />
    </>
  );
};

export default App;
