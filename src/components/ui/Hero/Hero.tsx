import React, { ReactNode } from "react";
import { Button } from "../Button/Button";
import { ChevronDown, Download, Send } from "lucide-react";
import Socials, { SocialsProps } from "../Socials/Socials";

export type HeroButton = {
  label: string;
  icon: ReactNode;
  variant: string;
  link: string;
  newTab?: boolean;
};

export type HeroProps = {
  NavigationComponent: React.ElementType;
  socialProps?: SocialsProps;
  heroImg?: ReactNode;
  heroTitle: string;
  heroText: ReactNode;
  heroDescription: string;
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
};

const Hero = (props: HeroProps) => {
  const {
    NavigationComponent,
    socialProps,
    heroImg,
    heroTitle,
    heroText,
    heroDescription,
    primaryButton,
    secondaryButton,
  } = props;

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              {heroTitle}
            </div>
            {heroText}
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              {heroDescription}
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              {primaryButton ? (
                <NavigationComponent
                  href={primaryButton?.link}
                  target={primaryButton?.newTab ? "_blank" : ""}
                  rel={primaryButton?.newTab ? "noopener noreferrer" : ""}
                >
                  <Button className="gap-x-2">
                    {primaryButton.label} <Send size={18} />
                  </Button>
                </NavigationComponent>
              ) : null}
              {secondaryButton ? (
                <NavigationComponent
                  href={secondaryButton?.link}
                  target={secondaryButton?.newTab ? "_blank" : ""}
                  rel={secondaryButton?.newTab ? "noopener noreferrer" : ""}
                >
                  <Button variant="secondary" className="gap-x-2">
                    {secondaryButton.label}
                    <Download size={18} />
                  </Button>
                </NavigationComponent>
              ) : null}
            </div>
            {/* socials */}
            {socialProps ? <Socials {...socialProps} /> : null}
          </div>
          {heroImg ? <>{heroImg}</> : null}
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <ChevronDown className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
