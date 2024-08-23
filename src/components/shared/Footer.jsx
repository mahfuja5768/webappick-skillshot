import { useEffect } from "react";
import { getImgUrl } from "../../utils/getImagePath";
import Button from "./Button";
import Container from "./Container";
import { useState } from "react";

const Footer = () => {
  const [activeNav, setActiveNav] = useState("Home");

  const navs = [
    { nav: "Home", path: "#" },
    { nav: "Course", path: "course" },
    { nav: "Subscribe", path: "subscribe" },
    { nav: "About", path: "about" },
    { nav: "Testimoni", path: "testimoni" },
  ];

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      navs.forEach((item) => {
        const section = document.getElementById(item.path);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveNav(item.path);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="
    bg-primary pt-28 pb-12 px-4 flex flex-col justify-center items-center gap-10"
    >
      <Container>
        <h2 className="text-lg lg:text-4xl  text-white text-center">
          Subscribe to get notified about update{" "}
        </h2>
        <p className="text-white/60 leading-8 text-center mx-auto mt-3 text-xs lg:text-base">
          By subscribing with your mail, you will accept our privacy policy
        </p>
        <div
          className="flex mt-5 flex-wrap justify-center
         items-center gap-1"
        >
          <input
            className="px-5 py-3 bg-white/10 text-white "
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <Button isOrange text={"Subscribe us"} />
        </div>
      </Container>
      <nav className="max-w-[1280px] mx-auto w-full px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-5">
        <a href="#">
          <img className="" src={getImgUrl("Logo.png")} alt="logo.png" />
        </a>
        <div className="flex justify-between items-center gap-5">
          <ul className="gap-6 flex flex-col lg:flex-row items-center text-xs lg:text-lg  text-primary">
            {navs.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-2 text-white/60 hover:text-opacity-80 duration-300 cursor-pointer ${
                  activeNav === item.path ? "text-white font-bold" : ""
                }`}
                onClick={() => handleScroll(item.path)}
              >
                {item.nav}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
