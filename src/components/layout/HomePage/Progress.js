import React from "react";
import SectionWrapper from "../../ui/SectionWrapper";
import ProgressBar from "../../ui/ProgressBar";
import SplitContainer from "../../ui/SplitContainer";
import Button from "../../ui/Button";

const Progress = () => {
  const nomadLinks = [
    {
      primaryText: "Our current progress.",
      link: "#progress",
    },
    {
      primaryText: "Browse the features gallery.",
      link: "#features",
    },
    {
      primaryText: "Magic playgroup finder.",
      link: "#progress",
    },
    {
      primaryText: "Drop me an email.",
      link: "#progress",
    },
  ];

  const geekLinks = [
    {
      primaryText: "Our current progress.",
      link: "#progress",
    },
    {
      primaryText: "Browse the features gallery.",
      link: "#features",
    },
    {
      primaryText: "Magic playgroup finder.",
      link: "#progress",
    },
    {
      primaryText: "Drop me an email.",
      link: "#progress",
    },
  ];

  const renderLinkContent = (links) => {
    return (
      <ul className="mt-2.5 text-sm font-normal">
        {links.map((obj, index) => {
          return (
            <li>
              <span className="text-gray-400 text-md">• </span>
              <a href={obj.link}>{obj.primaryText}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <SectionWrapper topMargin={true} divClassName="text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl">
          So here's where I am currently.
        </h2>
        <p className="text-xl mt-4">
          Dungeon House is a home for remote working geeks to come together to
          work and play Magic the Gathering, Warhammer, Dungeons and Dragons,
          and more.
        </p>
      </div>
      <ProgressBar
        percentage="20%"
        addClassName="mt-10"
        content="$10,000 / $50,000"
      />
      <div className="mt-8 grid grid-cols-8 gap-y-16 w-full">
        <div className="col-span-8 lg:col-span-4 ">
          <SplitContainer
            topContent={
              <>
                <h4 className="text-2xl">Nomad</h4>
                <p className="text-xl mt-2 font-light">
                  Become a successful digital nomad that is making over $10k
                  MRR.
                </p>
                {renderLinkContent(nomadLinks)}
              </>
            }
            bottomContent={
              <p>
                Feel free to click into any of the links above to learn more
                about each business.
              </p>
            }
            light={true}
          />
        </div>
        <div className="col-span-8 lg:col-span-4">
          <SplitContainer
            topContent={
              <>
                <h4 className="text-2xl">Geek</h4>
                <p className="text-xl mt-2 font-light">
                  Become a well-read and skillful player, who has judge-level
                  rules knowledge.
                </p>
                {renderLinkContent(geekLinks)}
              </>
            }
            bottomContent={
              <>
                <p>
                  If you'd like to help me along with any of these, feel free to
                  reach out.
                </p>
                <Button
                  size="small"
                  primaryText="Drop me an email"
                  link="https://ix0dy8pqosu.typeform.com/to/XZLHJIV8"
                  addClassName="mr-auto mt-4"
                />
              </>
            }
            light={false}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Progress;
