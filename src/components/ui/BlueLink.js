import React from "react";

const BlueLink = (props) => {
  const renderSwitch = (param) => {
    switch (param) {
      case "small":
        return "";

      case "large":
        return "text-2xl";

      default:
        return "";
    }
  };

  return (
    <a
      href={props.link}
      className={`font-bold text-link-main hover:text-link-hover underline ${
        props.className
      } ${renderSwitch(props.size)}`}
    >
      {props.primaryText}
    </a>
  );
};

export default BlueLink;
