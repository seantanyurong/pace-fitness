import React from "react";

const ProgressBar = (props) => {
  return (
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        class={`bg-highlight-orange text-xs md:text-sm font-semibold text-white text-center p-3 my-3 leading-none rounded-full ${props.addClassName}`}
        style={{ width: `${props.percentage}` }}
      >
        {props.content}
      </div>
    </div>
  );
};

export default ProgressBar;
