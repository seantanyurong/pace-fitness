import React from "react";
import SectionWrapper from "../../ui/SectionWrapper";
import Feature from "../../ui/Feature";
// import Feature1Img from "../../../assets/HomePage/Feature1.webp";
// import Feature2Img from "../../../assets/HomePage/Feature2.webp";
// import Feature3Img from "../../../assets/HomePage/Feature3.webp";

const Features = () => {
  const FeatureContent = [
    {
      primaryText: "Fitness",
      bodyText:
        "Be empowered and energised! Whether you’re a fitness enthusiast or just starting your journey, we welcome you!.",
      image: "pace-fitness/feature-1",
      link: "#",
    },
    {
      primaryText: "Mind Matters",
      bodyText:
        "Prioritise your mental wellness and nurture a positive mindset. We provide a safe space and supportive environment for growth and self-discovery.",
      image: "pace-fitness/feature-2",
      link: "#",
    },
    {
      primaryText: "Community Connection",
      bodyText:
        "Grab your friends and your joyful spirit for our community outings! Experience the joy of building connections within our vibrant community of women..",
      image: "pace-fitness/feature-3",
      link: "#",
    },
  ];

  return (
    <SectionWrapper topMargin={true} id="features">
      <h2>Our Events.</h2>
      <div className="mt-8 grid grid-cols-9 gap-y-16 sm:gap-16 w-full">
        {FeatureContent.map((feature, index) => {
          return (
            <div className="col-span-9 lg:col-span-3">
              <Feature
                primaryText={feature.primaryText}
                bodyText={feature.bodyText}
                image={feature.image}
                link={feature.link}
              />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Features;
