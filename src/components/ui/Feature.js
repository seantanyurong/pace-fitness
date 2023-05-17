import React from "react";
import BlueLink from "./BlueLink";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";

const Feature = (props) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dfhxocdgi",
    },
  });

  const myImage = cld.image(props.image);

  return (
    <div className="text-center">
      <div className="group cursor-pointer">
        {/* <img
          className="mx-auto drop-shadow-xl rounded-lg group-hover:-translate-y-1 duration-150 border-highlight-darkEggshell border-3 group-hover:border-solid  group-hover:border-highlight-blue"
          src={props.image}
          alt="Logo"
        /> */}
        <AdvancedImage
          className="mx-auto drop-shadow-xl rounded-lg group-hover:-translate-y-1 duration-150 border-highlight-darkEggshell border-3 group-hover:border-solid  group-hover:border-highlight-blue"
          cldImg={myImage}
          plugins={[
            lazyload(),
            responsive({ steps: 200 }),
            placeholder({ mode: "blur" }),
          ]}
        />
        <BlueLink
          size="medium"
          link={props.link}
          primaryText={props.primaryText}
          addClassName="mt-6 group-hover:text-link-hover"
        />
      </div>
      <p className="mt-2">{props.bodyText}</p>
    </div>
  );
};

export default Feature;
