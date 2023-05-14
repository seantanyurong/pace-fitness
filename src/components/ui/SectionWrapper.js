import React from "react";

const SectionWrapper = (props) => {
  return (
    <section
      className={`${props.topMargin && "mt-16"} ${props.sectionClassName}`}
      id={props.id}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 ${props.divClassName}`}>
        {props.children}
      </div>
    </section>
  );
};

export default SectionWrapper;
