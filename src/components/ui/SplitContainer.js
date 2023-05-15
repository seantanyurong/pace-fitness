import React from "react";

const SplitContainer = (props) => {
  if (props.light) {
    return (
      <div
        className={`rounded-xl border-3 border-highlight-darkEggshell ${props.addClassName}`}
      >
        <div className="p-8 text-left rounded-t-xl">{props.topContent}</div>
        <div className="p-8 text-left border-t-3 border-highlight-darkEggshell bg-highlight-eggshell rounded-b-xl">
          {props.bottomContent}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`rounded-xl border-3 border-highlight-pink ${props.addClassName}`}
      >
        <div className="p-8 pt-12 text-left bg-highlight-darkerEggshell rounded-t-xl">
          {props.topContent}
        </div>
        <div className="p-8 pb-12 text-left border-t-3 border-highlight-darkEggshell bg-highlight-darkestEggshell rounded-b-xl">
          {props.bottomContent}
        </div>
      </div>
    );
  }
};

export default SplitContainer;
