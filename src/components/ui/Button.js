import React from "react";

const Button = (props) => {
  const renderSwitch = (param) => {
    switch (param) {
      case "small":
        return (
          <div className=" bg-primary-main hover:bg-primary-hover font-semibold py-3 px-3 rounded-full items-center">
            <h3 className="text-sm sm:text-base text-white">
              {props.primaryText}
            </h3>
          </div>
        );

      case "large":
        return (
          <div className=" bg-primary-main hover:bg-primary-hover py-4 px-8 md:px-10 rounded-full items-center max-w-md">
            <h3 className="text-xl md:text-2xl font-semibold text-white ">
              {props.primaryText}
            </h3>
            <p className="text-xs sm:text-sm font-light text-white ">
              {props.secondaryText}
            </p>
          </div>
        );

      default:
        <div>Button size not allocated</div>;
    }
  };

  return (
    <div className={`max-w-none flex ${props.addClassName}`}>
      <a href={props.link} target="_blank" rel="noreferrer">
        {renderSwitch(props.size)}
      </a>
    </div>
  );
};

export default Button;
