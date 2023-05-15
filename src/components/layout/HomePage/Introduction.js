import YellowContainer from "../../ui/YellowContainer";
import BlueLink from "../../ui/BlueLink";
import Divider from "../../ui/Divider";
import SectionWrapper from "../../ui/SectionWrapper";

function Introduction() {
  const submenuLinks = [
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
      link: "#",
    },
    {
      primaryText: "Drop me an email.",
      link: "mailto:seantanyurong@gmail.com",
    },
  ];

  const submenuLinkContent = () => {
    return (
      <ul>
        {submenuLinks.map((obj, index) => {
          return (
            <li>
              • <BlueLink primaryText={obj.primaryText} link={obj.link} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <SectionWrapper
      id="about"
      topMargin={true}
      // divClassName="grid grid-cols-7 gap-y-16 sm:gap-16 w-full"
    >
      <div className="grid grid-cols-7 gap-y-16 sm:gap-16 w-full">
        {/* Left column - introduction */}
        <div className="col-span-7 lg:col-span-5">
          <h2 className="mb-3">
            Co-working in the day, Tabletop gaming in the night.
          </h2>
          <p className="mb-3 text-lg">
            <i>Written by ChatGPT.</i> Hey, my name is Sean, and I want to share
            my retirement dream with you. As a 23-year-old student and full
            stack developer from Singapore, I've always pondered whether there's
            more to life than the mundane 9-5 grind that often leads to a
            monotonous retirement. I refuse to believe that our existence should
            be reduced to being old folks sleeping on a pile of money.
          </p>
          <p className="mb-3 text-lg">
            That's where Dungeon House comes in—a thrilling exploration of the
            possibilities that lie beyond conventional work and hobbies. I am on
            a quest to discover if we can uncover greater meaning, purpose, and
            happiness not only in the twilight years but throughout our entire
            lives by merging our passions with our professional endeavors.{" "}
            <b>
              This unique blend of a harmonious hobby community and a
              cutting-edge co-working space is an experiment that we will embark
              upon together.
            </b>
          </p>

          <p className="mb-3 text-lg">
            Throughout this exhilarating journey, I'll be meticulously
            documenting my progress as I strive to transform this dream into a
            tangible reality. My aim is not only to manifest Dungeon House but
            also to lay the groundwork for others to venture out and establish
            their own extraordinary hobby-centric co-working spaces worldwide.
          </p>

          <p className="mb-3 text-lg">
            If you feel a stirring in your soul and a desire to be part of this
            transformative adventure, I wholeheartedly invite you to join me.
            <b>
              Together, let's chart a path towards making this grand vision a
              concrete and thriving sanctuary for geeks, remote workers, and
              passionate individuals seeking a life that intertwines work, play,
              and boundless fulfillment.
            </b>
          </p>
        </div>

        {/* Right column - submenu */}
        <div className="col-span-6 lg:col-span-2">
          <YellowContainer
            content={
              <div>
                <h4 className="mb-2">Things to check out</h4>
                {submenuLinkContent()}
              </div>
            }
          />
        </div>
      </div>
      <Divider addClassName="mt-16" />
    </SectionWrapper>
  );
}

export default Introduction;
