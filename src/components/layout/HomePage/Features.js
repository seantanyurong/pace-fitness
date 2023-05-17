import React from "react";
import SectionWrapper from "../../ui/SectionWrapper";
import Feature from "../../ui/Feature";
// import Feature1Img from "../../../assets/HomePage/Feature1.webp";
// import Feature2Img from "../../../assets/HomePage/Feature2.webp";
// import Feature3Img from "../../../assets/HomePage/Feature3.webp";

const Features = () => {
  const FeatureContent = [
    {
      primaryText: "Productive co-working in the day",
      bodyText:
        "In the day, Dungeon House is a comfortable and productive environment with both public desks and private rooms for remote workers.",
      image: "dungeon-house/feature-1",
    },
    {
      primaryText: "Playful tabletop gaming in the night",
      bodyText:
        "In the night, Dungeon House becomes an epic gaming environment with daily events supporting Magic the Gathering, Dungeons and Dragons, Warhammer, and more.",
      image: "dungeon-house/feature-2",
    },
    {
      primaryText: "Private community of geeks",
      bodyText:
        "We ensure that Dungeon House is a safe space for geeks to be geeks, but we also filter members to ensure that every individual is fun to be around - no salt here.",
      image: "dungeon-house/feature-3",
    },
  ];

  return (
    <SectionWrapper topMargin={true} id="features">
      <h2>A community that combines work and play.</h2>
      <div className="mt-8 grid grid-cols-9 gap-y-16 sm:gap-16 w-full">
        {FeatureContent.map((feature, index) => {
          return (
            <div className="col-span-9 lg:col-span-3">
              <Feature
                primaryText={feature.primaryText}
                bodyText={feature.bodyText}
                image={feature.image}
              />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Features;
