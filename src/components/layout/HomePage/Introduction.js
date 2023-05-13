import YellowContainer from "../../ui/YellowContainer";
import BlueLink from "../../ui/BlueLink";

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
      primaryText: "Dungeon Meetup - playgroup finder.",
      link: "#progress",
    },
    {
      primaryText: "Drop me an email.",
      link: "#progress",
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
    <section className="mt-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-7 gap-y-16 sm:gap-16 w-full">
        <div className="col-span-7 lg:col-span-5">
          <h3 className="mb-3">It's a co-working + tabletop gaming space.</h3>
          <p className="mb-3">
            Hey, my name is Sean, and this is my dream. As a 23 year old student
            and full stack developer from Singapore, I’ve always wondered if
            there’s more to life than working a 9-5 until you’re 65, only to
            retire and live out the rest of your days as an old man sleeping on
            a bed of cash.
          </p>
          <p className="mb-3">
            Dungeon House, is my exploration to determine if we can find more
            meaning, purpose, and happiness, not only at the end of life, but
            throughout life, by combining work and hobby. This formula of
            building a <b>coexisting hobby community + coworking space</b> is an
            experiment that we’ll foray into together.
          </p>

          <p className="mb-3">
            I’ll be documenting my journey as I work towards making this dream a
            reality, and hopefully paving the blueprint for others to go out and
            build their own hobby coworking spaces around the world.
          </p>

          <p className="mb-3">
            If this is is a journey you’d like to be a part of, I invite you to
            join me as we work towards making this a reality.
          </p>
        </div>
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
    </section>
  );
}

export default Introduction;
