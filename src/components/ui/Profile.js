import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

const Feature = (props) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dfhxocdgi",
    },
  });

  const myImage = cld.image(props.image);

  return (
    <div className="text-center">
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="group cursor-pointer"
      >
        <AdvancedImage
          className="mx-auto drop-shadow-xl rounded-lg group-hover:-translate-y-1 duration-150 border-highlight-darkEggshell border-3 group-hover:border-solid  group-hover:border-highlight-blue"
          cldImg={myImage}
          plugins={[responsive({ steps: 200 }), placeholder({ mode: "blur" })]}
          alt={props.primaryText}
        />
        <p
          className={`text-xl inline-block cursor-pointer font-semibold  hover:text-link-main underline mt-6 group-hover:text-link-main`}
        >
          {props.primaryText}
        </p>
        <p>{props.subtitleText}</p>
      </a>
      <p className="mt-2">{props.bodyText}</p>
    </div>
  );
};

export default Feature;
