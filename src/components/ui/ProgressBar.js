import React from "react";

const ProgressBar = (props) => {
  return (
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        class={`bg-highlight-orange text-xs font-semibold text-white text-center p-1.5 my-1.5 leading-none rounded-full ${props.addClassName}`}
        style={{ width: `${props.percentage}` }}
      >
        {props.content}
      </div>
    </div>
  );
};

export default ProgressBar;
