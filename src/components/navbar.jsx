import { React, useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme } from "../features/theme";
import { FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

import logo from "../assets/logo.png";

function NavBar(props) {
  const theme = useTheme();
  const [activePage, setActivePage] = useState("home");
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [themeIcon, setThemeIcon] = useState(
    <BsSunFill color={theme.color} size={25} />
  );

  const handleIcon = () => {
    props.themeName === "dark"
      ? setThemeIcon(<BsSunFill color={theme.color} size={25} />)
      : setThemeIcon(<BsMoonFill color={theme.color} size={25} />);
    props.passTheme();
  };

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 60 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function updateActivePage(page) {
    setActivePage(page);
  }

  return (
    <Router>
      <div
        className={
          isScrolled
            ? "fixed w-full h-20 z-[100] shadow-xl"
            : "fixed w-full h-20 z-[100]"
        }
        style={{
          background: theme.background,
          color: theme.text,
        }}
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-8 md:justify-around ml-auto">
          <HashLink to="#home">
            <img src={logo} alt="RY" loading="lazy" className="h-16 w-16" />
          </HashLink>
          <div className="hidden md:flex justify-between items-center">
            <ul className="hidden md:flex justify-between">
              <HashLink to="#home" onClick={() => updateActivePage("home")}>
                <li
                  className={
                    activePage === "home"
                      ? "ml-10 text-sm uppercase font-bold"
                      : "ml-10 text-sm uppercase hover:font-bold"
                  }
                >
                  Home
                </li>
              </HashLink>
              <HashLink to="#skills" onClick={() => updateActivePage("skills")}>
                <li
                  className={
                    activePage === "skills"
                      ? "ml-10 text-sm uppercase font-bold"
                      : "ml-10 text-sm uppercase hover:font-bold"
                  }
                  onClick={() => updateActivePage("skills")}
                >
                  Skills
                </li>
              </HashLink>
              <HashLink
                to="#projects"
                onClick={() => updateActivePage("projects")}
              >
                <li
                  className={
                    activePage === "projects"
                      ? "ml-10 text-sm uppercase font-bold"
                      : "ml-10 text-sm uppercase hover:font-bold"
                  }
                  onClick={() => updateActivePage("projects")}
                >
                  Projects
                </li>
              </HashLink>
            </ul>

            <div className="hidden md:flex items-center justify-between px-4">
              <div
                className="rounded-full border p-2 mx-1 cursor-pointer relative before-scale"
                style={{ color: theme.text, borderColor: theme.text }}
              >
                <FiFacebook size={25} />
              </div>
              <div
                className="rounded-full border p-2 mx-1 cursor-pointer relative before-scale"
                style={{ color: theme.text, borderColor: theme.text }}
              >
                <FiInstagram size={25} />
              </div>
              <div
                className="rounded-full border p-2 mx-1 cursor-pointer relative before-scale"
                style={{ color: theme.text, borderColor: theme.text }}
              >
                <FiLinkedin size={25} />
              </div>
            </div>
            <HashLink to="#connect">
              <button
                className="p-3 border relative before-scale before-btn"
                style={{ color: theme.text, borderColor: theme.text }}
              >
                <span>Let's Connect</span>
              </button>
            </HashLink>
          </div>
          <button onClick={handleIcon}>{themeIcon}</button>
          <div className="md:hidden px-2" onClick={handleNav}>
            <AiOutlineMenu color={theme.color} size={25} />
          </div>
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60vw] sm:w-[75vw] md:hidden h-screen p-f px-10 ease-in duration-500"
              : "fixed left-[-150vw] top-0 p-5 px-10 md:hidden ease-in duration-600"
          }
          style={{
            background: theme.background,
            color: theme.color,
          }}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <img src={logo} alt="RY" className="w-24 h-24" />
              <div
                onClick={handleNav}
                className="rounded-md cursor-pointer p-3"
                style={{ background: theme.primary, color: theme.background }}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-grey-300 mb-4 w-[85%]">
              <p>Ranim Yassin | Full Stack Developer</p>
            </div>
          </div>
          <div className="flex flex-col">
            <ul className="uppercase">
              <HashLink to="#home" onClick={() => updateActivePage("home")}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </HashLink>
              <HashLink to="#skills" onClick={() => updateActivePage("skills")}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </HashLink>
              <HashLink
                to="#projects"
                onClick={() => updateActivePage("projects")}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </HashLink>
            </ul>

            <div className="pt-10">
              <b
                className="uppercase tracking-widest"
                style={{ color: theme.title }}
              >
                let's Connect...
              </b>
              <div className="flex items-center justify-around w-full px-4 mt-4">
                <div
                  className="rounded-full border p-2 mx-1 cursor-pointer relative before-scale"
                  style={{ color: theme.text, borderColor: theme.text }}
                >
                  <FiFacebook size={25} />
                </div>
                <div
                  className="rounded-full border p-2 mx-1 cursor-pointer relative before-scale"
                  style={{ color: theme.text, borderColor: theme.text }}
                >
                  <FiInstagram size={25} />
                </div>
                <div
                  className="rounded-full border p-2 mx-1 cursor-pointer relative before-scale"
                  style={{ color: theme.text, borderColor: theme.text }}
                >
                  <FiLinkedin size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default NavBar;
