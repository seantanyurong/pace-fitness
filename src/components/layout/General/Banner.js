import React, { Fragment } from "react";

const Banner = () => {
  return (
    <Fragment>
      <div className="bg-black p-3 text-center">
        <p className="text-white font-light text-sm">
          Be part of an
          <span className="font-bold">
            {" "}
            exclusive community of tabletop gamers{" "}
          </span>
          today.
        </p>
      </div>
    </Fragment>
  );
};

export default Banner;
