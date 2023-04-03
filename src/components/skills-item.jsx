import React from "react";
import { useTheme } from "../features/theme";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SkillItem({ props }) {
  const theme = useTheme();
  return (
    <div className="flex flex-col justify-center items-center p-2 m-2">
      <CircularProgressbarWithChildren
        styles={{
          path: {
            stroke: theme.title,
            transition: "stroke-dashoffset 0.7s ease 0.2s",
          },
          trail: {
            stroke: theme.foreground,
          },
          text: {
            fill: theme.title,
          },
        }}
        value={props.percentage}
      >
        <img
          className="w-1/5 mt-[-1rem]"
          src={props.imgSrc}
          alt={props.name}
          loading="lazy"
        />
        <p
          style={{
            color: theme.text,
          }}
          className=" text-base md:text-xl"
        >
          {`${props.percentage}%`}
        </p>
      </CircularProgressbarWithChildren>
      <p
        style={{
          color: theme.title,
        }}
        className=" text-xl md:text-3xl"
      >
        {props.name}
      </p>
    </div>
  );
}

export default SkillItem;
