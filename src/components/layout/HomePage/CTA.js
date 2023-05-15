import React from "react";
import SectionWrapper from "../../ui/SectionWrapper";
import Button from "../../ui/Button";
import EggContainer from "../../ui/EggContainer";

const CTA = () => {
  return (
    <SectionWrapper topMargin={true} divClassName="text-center">
      <EggContainer>
        <h4 className="text-3xl font-black md:text-5xl mb-4">
          Want to be part of the <u>journey</u>?
        </h4>
        <p className="text-xl md:text-2xl mb-8">
          Join our Discord chat, and be among the first to hear about updates
          and new developments as we work towards making Dungeon House a
          reality. Sign up for early access today and be a part of shaping the
          future of co-working and tabletop gaming!
        </p>
        <Button
          size="large"
          primaryText="Join our Discord"
          secondaryText="Get a peek behind the scenes."
          addClassName="justify-center mx-auto"
          link="https://discord.gg/8UDaJrfJBs"
        />
      </EggContainer>
    </SectionWrapper>
  );
};

export default CTA;
