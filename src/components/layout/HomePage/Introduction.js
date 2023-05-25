import YellowContainer from "../../ui/YellowContainer";
import BlueLink from "../../ui/BlueLink";
import Divider from "../../ui/Divider";
import SectionWrapper from "../../ui/SectionWrapper";

function Introduction() {
  const submenuLinks = [
    {
      primaryText: "Fitness.",
      link: "#",
    },
    {
      primaryText: "Mind Matters.",
      link: "#",
    },
    {
      primaryText: "Outings.",
      link: "#",
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
            Elevating women’s fitness with mindful support and community.
          </h2>
          <p className="mb-3 text-lg">
            We are on a mission to create something truly special – a women's
            fitness community that goes beyond workouts and embraces the power
            of sisterhood.
          </p>
          <p className="mb-3 text-lg">
            Too often, we encountered judgment, unrealistic standards, and a
            sense of inadequacy that left us feeling discouraged and
            disconnected in our fitness journeys.
          </p>
          <p className="mb-3 text-lg">
            Starting Pace Fitness has been a labour of love, born out of a
            desire to provide a space where women can thrive, support each
            other, and prioritise their mental health alongside their physical
            well-being. In this community, we uplift and inspire one another,
            celebrating our unique strengths and journeys so that each
            individual can grow at her own pace.
          </p>

          <p className="mb-3 text-lg">
            Pace Fitness is not just about fitness; it's about fostering a sense
            of belonging, empowerment, and growth. Together, we are redefining
            what it means to be a strong and united community of women.
          </p>
        </div>

        {/* Right column - submenu */}
        <div className="col-span-6 lg:col-span-2">
          <YellowContainer
            content={
              <div>
                <h4 className="mb-2">Our Events</h4>
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
