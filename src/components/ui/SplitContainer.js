import React from "react";

const SplitContainer = (props) => {
  if (props.light) {
    return (
      <div className="rounded-md border-3 border-highlight-darkEggshell">
        <div className="p-8 text-left">{props.topContent}</div>
        <div className="p-8 text-left border-t-3 border-highlight-darkEggshell bg-highlight-eggshell">
          {props.bottomContent}
        </div>
      </div>
    );
  } else {
    return (
      <div className="rounded-md border-3 border-highlight-pink">
        <div className="p-8 pt-12 text-left bg-highlight-darkerEggshell">
          {props.topContent}
        </div>
        <div className="p-8 pb-12 text-left border-t-3 border-highlight-darkEggshell bg-highlight-darkestEggshell">
          {props.bottomContent}
        </div>
      </div>
    );
  }
};

export default SplitContainer;
