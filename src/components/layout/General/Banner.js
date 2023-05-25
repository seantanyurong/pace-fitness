import React, { Fragment } from "react";

const Banner = () => {
  return (
    <Fragment>
      <div className="bg-black p-3 text-center">
        <p className="text-white font-light text-sm">
          Supported by the
          <span className="font-bold"> One Club </span> - a community builder.
        </p>
      </div>
    </Fragment>
  );
};

export default Banner;
