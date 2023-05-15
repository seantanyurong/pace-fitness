import React from "react";
import SectionWrapper from "../../ui/SectionWrapper";
import ProgressBar from "../../ui/ProgressBar";
import SplitContainer from "../../ui/SplitContainer";
import Button from "../../ui/Button";

const Progress = () => {
  const nomadLinks = [
    {
      primaryText: "Grow The 100 Club",
      link: "https://the100club.io/",
    },
    {
      primaryText: "Make $100k on Upwork as a Freelancer",
      link: "https://seantanyurong.com/",
    },
    {
      primaryText: "Build Donna, a Super Virtual Assistant Agency",
      link: "https://www.meetyourdonna.com/",
    },
  ];

  const geekLinks = [
    {
      primaryText: "Work at a Local Game Store",
      link: "https://seantanyurong.com/",
    },
    {
      primaryText: "Build a Magic the Gathering Community",
      link: "https://seantanyurong.com/",
    },
    {
      primaryText: "Build a Miniature Painting Community",
      link: "https://www.instagram.com/orionsky_hobbies/",
    },
    {
      primaryText: "Get Magic the Gathering Judge Certification",
      link: "https://seantanyurong.com/",
    },
    {
      primaryText: "Read up on Magic the Gathering lore",
      link: "https://seantanyurong.com/",
    },
    {
      primaryText: "Win a Miniature Painting Competition",
      link: "https://www.instagram.com/orionsky_hobbies/",
    },
  ];

  const renderLinkContent = (links, twoColumn) => {
    if (twoColumn) {
      return (
        <ul className="mt-3.5 text-sm font-normal grid grid-cols-2">
          {links.map((obj, index) => {
            return (
              <li className="col-span-2 lg:col-span-1">
                <span className="text-gray-400 text-md">• </span>
                <a href={obj.link} target="_blank" rel="noreferrer">
                  {obj.primaryText}
                </a>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul className="mt-3.5 text-sm font-normal">
          {links.map((obj, index) => {
            return (
              <li>
                <span className="text-gray-400 text-md">• </span>
                <a href={obj.link} target="_blank" rel="noreferrer">
                  {obj.primaryText}
                </a>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <SectionWrapper topMargin={true} divClassName="text-center" id="progress">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl">Here's where I'm at currently.</h2>
        <p className="text-xl mt-4">
          The goal is to save or raise $50,000, in order to fund the initial
          startup costs. In the mean time, I'll be working towards completeing a
          series of nomadic and geek milestones, so that I'm better set up to
          carry out this endeavour.
        </p>
      </div>
      <ProgressBar
        percentage="40%"
        addClassName="mt-10"
        content="$10,000 / $50,000"
      />
      <div className="mt-14 grid grid-cols-8 gap-y-16 w-full">
        <div className="col-span-8 lg:col-span-3 self-center">
          <SplitContainer
            addClassName="border-r-0 rounded-r-none"
            topContent={
              <>
                <h4 className="text-2xl">Nomad</h4>
                <p className="text-xl mt-2 font-light">
                  Become a successful digital nomad that is making over $10k
                  MRR.
                </p>
                {renderLinkContent(nomadLinks, false)}
              </>
            }
            bottomContent={
              <>
                <p>
                  Feel free to <b>click into any of the links above</b> to learn
                  more about each idea.
                </p>
                <Button
                  size="small"
                  primaryText="Drop me an email"
                  link="mailto:seantanyurong@gmail.com"
                  addClassName="mt-4"
                />
              </>
            }
            light={true}
          />
        </div>
        <div className="col-span-8 lg:col-span-5 self-center">
          <SplitContainer
            topContent={
              <>
                <h4 className="text-2xl">Geek</h4>
                <p className="text-xl mt-2 font-light">
                  Become a well-read and skillful player, who has judge-level
                  rules knowledge in Magic, Warhammer, etc.
                </p>
                {renderLinkContent(geekLinks, true)}
              </>
            }
            bottomContent={
              <>
                <p>
                  If you'd like to{" "}
                  <b>help me along with any of these fun little projects</b> or
                  have partnership opportunities, feel free to reach out.
                </p>
                <Button
                  size="small"
                  primaryText="Drop me an email"
                  link="mailto:seantanyurong@gmail.com"
                  addClassName="mt-4"
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
