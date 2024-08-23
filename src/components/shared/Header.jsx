import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { getImgUrl } from "../../utils/getImagePath";
import Button from "./Button";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
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
    setShowNav(false);
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
    <div className="fixed top-0 left-0 w-full bg-primary h-24 lg:h-24 z-50">
      <nav className="max-w-[1280px] mx-auto px-4 pt-4 flex items-center justify-between gap-5">
        <a href="#">
          <img className="" src={getImgUrl("Logo.png")} alt="logo.png" />
        </a>
        <div className="flex justify-between items-center gap-5">
          <ul className="gap-6 lg:flex hidden text-lg font-medium text-primary">
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
        <div className="items-center gap-6 lg:flex hidden">
          <ul className="flex items-center gap-6 text-lg font-medium text-primary">
            <li className="text-white duration-300 cursor-pointer">Login</li>
          </ul>
          <Button isOrange text="Register" />
        </div>
        {showNav ? (
          <div className="flex lg:hidden text-white/60 text-lg">
            <button onClick={() => setShowNav(!showNav)}>
              <RxCross2 className="font-bold" />
            </button>
          </div>
        ) : (
          <div className="flex lg:hidden text-primary text-lg font-bold">
            <button onClick={() => setShowNav(!showNav)}>
              <img src={getImgUrl("menu.png")} alt="menu" />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Navigation */}
      {showNav && (
        <nav
          className={`flex flex-col justify-center z-10 bg-[#24332a] text-white py-12 w-full text-center absolute duration-700 ease-in ${
            showNav ? "top-24" : "top-[-1000px]"
          }`}
        >
          <div>
            <ul className="gap-6 lg:hidden flex flex-col justify-center items-center text-lg font-medium">
              {navs.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-2 hover:text-opacity-20 cursor-pointer ${
                    activeNav === item.path ? "text-white font-bold" : ""
                  }`}
                  onClick={() => handleScroll(item.path)}
                >
                  {item.nav}
                </li>
              ))}
            </ul>
          </div>
          <div className="items-center gap-6 lg:hidden flex flex-col mt-12">
            <ul className="flex items-center gap-6 text-lg font-medium text-primary">
              <li className="text-white duration-300 cursor-pointer">Login</li>
            </ul>
            <Button isOrange text="Register" />
          </div>
        </nav>
      )}
    </div>
  );
}
