import React from "react";

const EggContainer = (props) => {
  return (
    <div className=" bg-highlight-eggshell p-8 md:p-20 rounded-md border-2 border-dotted border-text-main">
      {props.children}
    </div>
  );
};

export default EggContainer;
