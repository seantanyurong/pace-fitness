import React from "react";

const BasicHeaderText = (props) => {
  return (
    <>
      <h2 className="md:text-4xl mb-3 leading-tighter">{props.header}</h2>
      <p className="text-xl md:text-2xl mb-8">{props.content}</p>
    </>
  );
};

export default BasicHeaderText;
