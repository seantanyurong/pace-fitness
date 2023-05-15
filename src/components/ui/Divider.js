import React from "react";

const Divider = (props) => {
  return (
    <span
      className={`block bg-gradient-to-r from-[#ff7d0f] to-[#ffcd05] h-1 w-40 rounded-full ${props.addClassName}`}
    ></span>
  );
};

export default Divider;
