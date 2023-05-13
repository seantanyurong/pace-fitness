import React from "react";

const YellowContainer = (props) => {
  return (
    <div className="bg-highlight-lightYellow p-7 rounded-md border">
      {props.content}
    </div>
  );
};

export default YellowContainer;
