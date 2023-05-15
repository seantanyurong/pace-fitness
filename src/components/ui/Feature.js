import React from "react";
import BlueLink from "./BlueLink";

const Feature = (props) => {
  return (
    <div className="text-center">
      <div className="group cursor-pointer">
        <img
          className="mx-auto drop-shadow-xl rounded-lg hover:-translate-y-1 duration-150 border-highlight-darkEggshell border-3 group-hover:border-solid  group-hover:border-highlight-blue"
          src={props.image}
          alt="Logo"
        />
        <BlueLink
          size="medium"
          link={props.link}
          primaryText={props.primaryText}
          addClassName="mt-6 group-hover:text-link-hover"
        />
      </div>
      <p className="mt-2">{props.bodyText}</p>
    </div>
  );
};

export default Feature;
