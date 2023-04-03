import React from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { useTheme } from "../features/theme";
import { MdWavingHand } from "react-icons/md";
import lightBG from "../assets/banner-bg-light.jpg";
import darkBG from "../assets/banner-bg-dark.png";
import lightImg from "../assets/banner-light.png";
import darkImg from "../assets/banner-dark.png";

function Banner(props) {
  const theme = useTheme();
  const [bg, setBg] = React.useState(`url(${darkBG})`);
  const [imge, setImg] = React.useState(darkImg);

  const period = 2000; //last interval time in seconds
  const [texting, setTexting] = React.useState({
    startIndex: 0,
    isAdding: true,
    text: "",
    speed: 350 - Math.random() * 150, //give a litle randomnis to the speed
    index: 1,
  });

  React.useEffect(() => {
    if (props.themeName === "light") {
      setBg(`url(${lightBG})`);
      setImg(lightImg);
    } else {
      setBg(`url(${darkBG})`);
      setImg(darkImg);
    }
  }, [props.themeName, bg]);

  React.useEffect(() => {
    //
    const sentences = [
      "Flutter Developer",
      "Frontend Developer",
      "Fullstack Developer",
    ];
    const boomBaam = () => {
      let i = texting.startIndex % sentences.length;
      let writeText = sentences[i];
      let updatedText = texting.isAdding
        ? writeText.substring(0, texting.text.length + 1)
        : writeText.substring(0, texting.text.length - 1);

      // to track the length
      setTexting((prev) => {
        return {
          ...prev,
          text: updatedText,
        };
      });
      if (!texting.isAdding)
        setTexting((prev) => {
          return {
            ...prev,
            speed: prev.speed / 2,
          };
        });
      if (texting.isAdding && updatedText === writeText) {
        // if reached the end start delete
        setTexting((prev) => {
          return {
            ...prev,
            isAdding: false,
            index: prev.index - 1,
            speed: period,
          };
        });
      } else if (!texting.isAdding && updatedText === "") {
        //if reached the start start adding
        setTexting((prev) => {
          return {
            ...prev,
            isAdding: true,
            startIndex: prev.startIndex + 1,
            index: 1,
            speed: 300, //0.3s
          };
        });
      } else {
        setTexting((prev) => {
          return {
            ...prev,
            index: prev.index + 1,
          };
        });
      }
    };
    // every speed add or subtract letter
    let boom = setInterval(() => {
      boomBaam();
    }, texting.speed);

    return () => {
      clearInterval(boom);
    };
  }, [texting]);

  return (
    <section
      id="home"
      className="py-[25vh] pb-[50vh]"
      style={{
        backgroundImage: bg,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: theme.text,
      }}
    >
      <div className="px-2 mx-auto grid md:grid-cols-4 gap-4">
        <div className=" md:col-span-3">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeIn p-2" : "p-2"
                }
              >
                <span
                  className="capitalize p-2 mb-2 shadow-sm shadow-gray-400"
                  style={{
                    color: theme.text,
                    border: `1px solid ${theme.text}`,
                    background: `linear-gradient(90deg, ${theme.background} 0%, ${theme.foreground} 50%,  ${theme.title} 100%)`,
                  }}
                >
                  Welcome to my portfolio
                </span>
                <h1
                  className="py-4 text-[60px] wrap"
                  style={{ color: theme.text, lineHeight: "130%" }}
                >
                  Hi, I'm{" "}
                  <span
                    style={{
                      color: theme.yellow,
                      textShadow: `1px 1px ${theme.primary}`,
                    }}
                  >
                    Ranim Yassin Taboush
                    <MdWavingHand size={35} className="inline" />
                  </span>
                  <span className="wrap"> {texting.text}</span>
                </h1>
                <p style={{ color: theme.text, textAlign: "justify" }}>
                  I'm flutter & frontend web developer specialized in building
                  exceptional mobile and web applications that provide the best
                  digital experiences to the user. Currently, I'm focused on
                  building responsive frontend web applications while learning
                  some backend technologies
                </p>
              </div>
            )}
          </TrackVisibility>
        </div>
        <div className=" md:col-span-1">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__animated animate__zoomIn flex justify-center items-center"
                    : "flex justify-center items-center"
                }
              >
                <img
                  src={imge}
                  alt="spaceman"
                  loading="lazy"
                  className="h-[50vh]"
                />
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </section>
  );
}

export default Banner;
