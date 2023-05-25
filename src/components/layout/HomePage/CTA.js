import React from "react";
import SectionWrapper from "../../ui/SectionWrapper";
import Button from "../../ui/Button";
import EggContainer from "../../ui/EggContainer";

const CTA = () => {
  return (
    <SectionWrapper topMargin={true} divClassName="text-center">
      <EggContainer>
        <h4 className="text-3xl font-black md:text-5xl mb-4">
          Join us and find your <u>pace</u>!
        </h4>
        <p className="text-xl md:text-2xl mb-8">
          Be part of our Telegram group for updates on our upcoming events and
          interact with our community!
        </p>
        <Button
          size="large"
          primaryText="Join our Telegram"
          secondaryText="Embark on a transformative fitness journey with the support of our empowering community!"
          addClassName="justify-center mx-auto"
          link="https://t.me/pacefitness"
        />
      </EggContainer>
    </SectionWrapper>
  );
};

export default CTA;
