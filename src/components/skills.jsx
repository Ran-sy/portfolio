import React from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTheme } from "../features/theme";
import SkillItem from "./skills-item";
import officeImg from "../assets/skills/moffice.png";
import photoshopImg from "../assets/skills/photoshop.png";
import reduxImg from "../assets/skills/redux.png";
import uiuxImg from "../assets/skills/uiux.png";
import nodejsImg from "../assets/skills/nodejs.png";
import githubImg from "../assets/skills/github.png";
import nextjsImg from "../assets/skills/next.png";
import reactImg from "../assets/skills/react.png";
import javascriptImg from "../assets/skills/js.png";
import jqueryImg from "../assets/skills/jquery.png";
import firebaseImg from "../assets/skills/firebase.png";
import flutterImg from "../assets/skills/flutter.png";
import bootstrapImg from "../assets/skills/bootstrap.png";
import tailwindcssImg from "../assets/skills/tailwind.png";
import cssImg from "../assets/skills/css.png";
import htmlImg from "../assets/skills/html.png";

function Skills() {
  const theme = useTheme();
  const skillItems = [
    {
      id: 1,
      imgSrc: htmlImg,
      name: "HTML",
      percentage: 98,
    },
    { id: 2, imgSrc: cssImg, name: "CSS", percentage: 90 },
    {
      id: 3,
      imgSrc: tailwindcssImg,
      name: "Tailwind",
      percentage: 85,
    },
    {
      id: 4,
      imgSrc: bootstrapImg,
      name: "Bootstrap",
      percentage: 95,
    },
    {
      id: 5,
      imgSrc: flutterImg,
      name: "Flutter",
      percentage: 80,
    },
    {
      id: 6,
      imgSrc: firebaseImg,
      name: "Firebase",
      percentage: 80,
    },
    {
      id: 7,
      imgSrc: jqueryImg,
      name: "JQuery",
      percentage: 75,
    },
    {
      id: 8,
      imgSrc: javascriptImg,
      name: "JavaScript",
      percentage: 85,
    },
    {
      id: 9,
      imgSrc: reactImg,
      name: "React.JS",
      percentage: 85,
    },
    {
      id: 10,
      imgSrc: nextjsImg,
      name: "Next.JS",
      percentage: 90,
    },
    {
      id: 11,
      imgSrc: nodejsImg,
      name: "Node.JS",
      percentage: 75,
    },
    {
      id: 12,
      imgSrc: githubImg,
      name: "Github",
      percentage: 80,
    },
    {
      id: 13,
      imgSrc: uiuxImg,
      name: "UI / UX",
      percentage: 75,
    },
    {
      id: 14,
      imgSrc: reduxImg,
      name: "Redux",
      percentage: 75,
    },
    {
      id: 15,
      imgSrc: photoshopImg,
      name: "Photoshop",
      percentage: 90,
    },
    {
      id: 16,
      imgSrc: officeImg,
      name: "M-Office",
      percentage: 98,
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="skills">
      <div className="w-full" style={{ background: theme.background }}>
        <TrackVisibility className="translate-y-[-25vh] p-4 max-w-2xl mx-auto">
          {({ isVisible }) => (
            <div
              style={{ background: theme.foreground }}
              className={
                isVisible
                  ? "rounded-lg animate__animated animate__lightSpeedInRight scale-100"
                  : "scale-0"
              }
            >
              <header
                className="text-center capitalize"
                style={{ color: theme.text }}
              >
                <h2 className="uppercase text-3xl font-sans tracking-wider font-extrabold">
                  .Skills.
                </h2>
                <h3>here is a list of my skills</h3>
              </header>
              <Carousel
                responsive={responsive}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                containerClass="py-4 w-full"
                itemClass="px-2"
              >
                {skillItems.map((skill) => {
                  return <SkillItem key={skill.id} props={skill} />;
                })}
              </Carousel>
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
}

export default Skills;
