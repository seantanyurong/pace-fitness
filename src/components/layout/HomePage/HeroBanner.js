import Button from "../../ui/Button";
import BlueLink from "../../ui/BlueLink";
import SectionWrapper from "../../ui/SectionWrapper";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";

function HeroBanner() {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dfhxocdgi",
    },
  });

  const myImage = cld.image("dungeon-house/heroBanner");

  return (
    <SectionWrapper
      id="about"
      topMargin={false}
      sectionClassName="text-center before:block before:absolute before:-inset-1 before:bg-gradient-to-b before:from-highlight-eggshell before:to-white before:h-full before:-z-1 relative"
    >
      {/* Text */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className=" md:pt-4 ">
          {/* Section header */}
          <div className="pb-12 md:pb-16">
            <h1 className="mb-4">
              A private <br className="sm:hidden"></br>co-working space for
              remote geeks.
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8">
                Dungeon House is a home for remote working geeks to come
                together to work and play Magic the Gathering, Warhammer,
                Dungeons and Dragons, and more.
              </p>
              <Button
                size="large"
                primaryText="Join our Discord"
                secondaryText="Get a peek behind the scenes of this project."
                addClassName="justify-center mx-auto"
                link="https://discord.gg/8UDaJrfJBs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <AdvancedImage
        className="mx-auto drop-shadow-3xl mb-10 rounded-lg w-6xl"
        cldImg={myImage}
        plugins={[
          lazyload(),
          responsive({ steps: 200 }),
          placeholder({ mode: "blur" }),
        ]}
        alt="heroBanner"
      />

      {/* Link */}
      <BlueLink
        link="#features"
        primaryText="See everything we have to offer and more"
        size="large"
      />
    </SectionWrapper>
  );
}

export default HeroBanner;
