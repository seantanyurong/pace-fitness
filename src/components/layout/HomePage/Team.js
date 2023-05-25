import React from "react";
import SectionWrapper from "../../ui/SectionWrapper";
import Profile from "../../ui/Profile";

const FeatureContent = [
  {
    primaryText: "Vera Anne",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quo rerum, unde laboriosam sunt officia expedita repellat dolor voluptatibus laborum.",
    image: "pace-fitness/placeholder",
    subtitleText: "Co-Founder & CTO",
    link: "https://www.linkedin.com/in/veraannelim/",
  },
  {
    primaryText: "Chloe",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quo rerum, unde laboriosam sunt officia expedita repellat dolor voluptatibus laborum.",
    image: "pace-fitness/placeholder",
    subtitleText: "Co-Founder & CTO",
    link: "https://www.linkedin.com/in/lim-yuxuan-chloe-esther-%E6%9E%97%E6%84%89%E7%92%87-a714361a8/",
  },
];
const Team = () => {
  return (
    <SectionWrapper topMargin={true} divClassName="text-center" id="progress">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl">Meet the Founders.</h2>
        <p className="text-xl mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          similique, et ullam recusandae obcaecati harum soluta ea odit
          cupiditate? Sunt dolorem recusandae molestiae nihil consequuntur
          veritatis architecto repellat tempore dolore!
        </p>
      </div>
      <div className="mt-8 grid grid-cols-8 gap-y-4 sm:gap-4 w-full">
        {" "}
        {FeatureContent.map((feature, index) => {
          return (
            <div className="col-span-8 lg:col-span-4">
              <Profile
                primaryText={feature.primaryText}
                subtitleText={feature.subtitleText}
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

export default Team;
