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

  const myImage = cld.image("pace-fitness/heroBanner");

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
              Unleashing the power of community in women’s fitness
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8">
                We believe that fitness extends beyond physical strength; it
                encompasses mental wellness and a strong support system. At Pace
                Fitness, we provide a safe and inclusive space where women can
                connect, find inspiration, and receive the mental health support
                they need. Together, we'll redefine what it means to be fit,
                strong, and confident.
              </p>
              <Button
                size="large"
                primaryText="Join our Telegram"
                secondaryText="Embark on a transformative fitness journey with the support of our empowering community!"
                addClassName="justify-center mx-auto"
                link="https://t.me/pacefitness"
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
        primaryText="Find out more about what we do!"
        size="large"
      />
    </SectionWrapper>
  );
}

export default HeroBanner;
