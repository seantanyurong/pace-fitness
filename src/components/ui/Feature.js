import React from "react";
import BlueLink from "./BlueLink";

const Feature = (props) => {
  return (
    <div className="text-center">
      <img
        className="cursor-pointer mx-auto drop-shadow-xl rounded-lg hover:-translate-y-1 duration-150 border-highlight-darkEggshell border-3 hover:border-solid  hover:border-highlight-blue"
        src={props.image}
        alt="Logo"
      />
      <BlueLink
        size="medium"
        link={props.link}
        primaryText={props.primaryText}
        addClassName="mt-6"
      />
      <p className="mt-2">{props.bodyText}</p>
    </div>
  );
};

export default Feature;
