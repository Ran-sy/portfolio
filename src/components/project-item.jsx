import React from "react";

function ProjectItem({ props }) {
  return (
    <div className="relative h-auto mx-auto max-h-56 max-w-sm w-4/5 flex items-center justify-center shadow-sm shadow-gray-400 rounded-lg group hover:bg-gradient-to-r from-[#ffc83d] to-[#45a29e] ease-linear duration-150 m-2 hover:scale-105">
      <img
        src={props.imgSrc}
        alt={props.name}
        className="rounded-lg max-w-full max-h-52 p-4 group-hover:opacity-10 ease-linear duration-150"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h4 className="text-[#1f2833] text-lg py-8">{props.name}</h4>
        <a href={props.demoLink}>
          <p className="text-center py-3 rounded-lg bg-[#66fcf1] text-[#1f2833] shadow-md font-bold cursor-pointer">
            Check out
          </p>
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
