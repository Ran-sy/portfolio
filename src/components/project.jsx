import React from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { useTheme } from "../features/theme";
import ProjectItem from "./project-item";
import animalRaceImg from "../assets/projects/animal-race.jpg";
import gameCenterImg from "../assets/projects/game-center.jpg";
import miniStoreImg from "../assets/projects/mini-store.jpg";
import simpleCalculatorImg from "../assets/projects/simple-calculator.jpg";
import studentStoreImg from "../assets/projects/student-store.jpg";
import ultimateChatImg from "../assets/projects/ultimate-chat.jpg";
import website1Img from "../assets/projects/website1.jpg";
import website2Img from "../assets/projects/website2.jpg";
import website3Img from "../assets/projects/website3.jpg";
import portfolioImg from "../assets/projects/next-portfolio.jpg";

function Project() {
  const theme = useTheme();
  const projectItems = [
    {
      id: 1,
      imgSrc: studentStoreImg,
      name: "Student Store",
      demoLink:
        "https://play.google.com/store/apps/details?id=com.nbs.StudentStore",
    },
    {
      id: 2,
      imgSrc: ultimateChatImg,
      name: "Ultimate Chat",
      demoLink: "https://ran-sy.github.io/ultimate-chat/",
    },
    {
      id: 3,
      imgSrc: gameCenterImg,
      name: "Game Center",
      demoLink: "https://ran-sy.github.io/game-center/",
    },
    {
      id: 4,
      imgSrc: simpleCalculatorImg,
      name: "Simple Calculator",
      demoLink: "https://ran-sy.github.io/extremely-simple-calculator/",
    },
    {
      id: 5,
      imgSrc: miniStoreImg,
      name: "Mini Store",
      demoLink: "https://ran-sy.github.io/mini-store/",
    },
    {
      id: 6,
      imgSrc: ultimateChatImg,
      name: "Ultimate Chat",
      demoLink: "https://ran-sy.github.io/ultimate-chat/",
    },
    {
      id: 7,
      imgSrc: website1Img,
      name: "First Website",
      demoLink: "https://ran-sy.github.io/website1/",
    },
    {
      id: 8,
      imgSrc: website2Img,
      name: "Second Website",
      demoLink: "https://ran-sy.github.io/website2/",
    },
    {
      id: 9,
      imgSrc: website3Img,
      name: "Third Website",
      demoLink: "https://ran-sy.github.io/website3/",
    },
    {
      id: 10,
      imgSrc: animalRaceImg,
      name: "Animals Race",
      demoLink: "https://ran-sy.github.io/animals-race-animation/",
    },
    {
      id: 11,
      imgSrc: portfolioImg,
      name: "Portfolio",
      demoLink: "https://ran-sy.github.io/Ranim/",
    },
  ];
  const tab1 = React.useRef();
  const tab2 = React.useRef();
  const tab3 = React.useRef();
  const panel1 = React.useRef();
  const panel2 = React.useRef();
  const panel3 = React.useRef();

  React.useEffect(() => {
    let tabs = [tab1, tab2, tab3];
    let panels = [panel1, panel2, panel3];
    const changeTab = (index) => {
      tabs.forEach((tab, tabIndex) => {
        if (index === tabIndex) {
          tab.current.style.background = theme.title;
          tab.current.style.textShadow = "1px 1px #eee";
        } else {
          tab.current.style.background = theme.foreground;
          tab.current.style.textShadow = "none";
        }
      });
      panels.forEach((panel, panelIndex) => {
        if (panelIndex === index) {
          panel.current.style.display = "grid";
        } else {
          panel.current.style.display = "none";
        }
      });
    };

    tabs.forEach((tab, tabIndex) => {
      tab.current.addEventListener("click", () => changeTab(tabIndex));
    });

    return tabs.forEach((tab, tabIndex) => {
      tab.current.removeEventListener("click", () => changeTab(tabIndex));
    });
  }, [theme.foreground, theme.title]);

  return (
    <section
      id="projects"
      className="w-full"
      style={{ background: theme.background, color: theme.text }}
    >
      <TrackVisibility className="w-full">
        {({ isVisible }) => (
          <div className="max-w-7xl mx-auto">
            <div>
              <header
                className="text-center capitalize"
                style={{ color: theme.text }}
              >
                <h2
                  className={
                    isVisible
                      ? "uppercase text-3xl font-sans tracking-wider font-extrabold animate__animated animate__backInDown"
                      : "uppercase text-3xl font-sans tracking-wider font-extrabold"
                  }
                >
                  .Projects.
                </h2>
                <h3
                  className={
                    isVisible ? "animate__animated animate__backInUp" : ""
                  }
                >
                  here are some projects
                </h3>
              </header>
              <div className="w-full mx-auto">
                <div
                  role="tablist"
                  aria-label="tabs"
                  className="w-max mx-auto h-12 grid grid-cols-3 items-center rounded-full shadow-2xl transition"
                  style={{ background: theme.foreground }}
                >
                  <button
                    role="tab"
                    aria-selected="true"
                    aria-controls="panel-1"
                    id="tab-1"
                    tabIndex="0"
                    ref={tab1}
                    className="relative block px-6 h-11 transition rounded-full"
                    style={{
                      background: theme.title,
                      textShadow: "1px 1px #eee",
                    }}
                  >
                    <span className="text-gray-800">Project Section</span>
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    aria-controls="panel-2"
                    id="tab-2"
                    tabIndex="1"
                    ref={tab2}
                    className="relative block px-6 h-11 transition rounded-full"
                  >
                    <span className="text-gray-800">Empty Section</span>
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    aria-controls="panel-3"
                    id="tab-3"
                    tabIndex="2"
                    ref={tab3}
                    className="relative block px-6 h-11 transition rounded-full"
                  >
                    <span className="text-gray-800">Text Section</span>
                  </button>
                </div>
                <div className="mt-6 py-2 w-full rounded-3xl h-fit">
                  <div
                    role="tabpanel"
                    id="panel-1"
                    ref={panel1}
                    className="p-6 w-full grid md:grid-cols-2 xl:grid-cols-3 transition duration-300"
                  >
                    {projectItems.map((project) => {
                      return <ProjectItem key={project.id} props={project} />;
                    })}
                  </div>
                  <div
                    role="tabpanel"
                    id="panel-2"
                    ref={panel2}
                    style={{ display: "none" }}
                    className="p-6 transition duration-300 h-28"
                  ></div>
                  <div
                    role="tabpanel"
                    id="panel-3"
                    ref={panel3}
                    className="p-6 transition duration-300 h-fit mx-auto w-4/5"
                    style={{ background: theme.primary, display: "none" }}
                  >
                    <h2
                      className="text-xl font-semibold"
                      style={{ color: theme.text }}
                    >
                      Text Section
                    </h2>
                    <p className="text-xl">
                      Hi Everyone, my name is Ranim, I'm Syrian currently based
                      in Egypt, and I'm gonna list a bunch of stuff that I like
                      for absolutely no reason: winter, tea, technology,
                      geometric, games, food, water, cold water, water again ,
                      did i mention water? ok, i think I'm done. thx for reading
                      :D
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
}

export default Project;
