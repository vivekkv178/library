import React from "react";
import { Icon } from "@iconify/react";

export const SocialIcons = {
  youtube: "ri:youtube-fill",
  linkedIn: "ri:linkedin-fill",
  github: "ri:github-fill",
  facebook: "ri:facebook-fill",
  instagram: "ri:instagram-fill",
};

export type Social = {
  youtube?: string;
  linkedIn?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
};

export type SocialsProps = {
  NavigationComponent: React.ElementType;
  socials: Social;
  footer?: boolean;
};

const Socials = (props: SocialsProps) => {
  const { NavigationComponent, socials, footer } = props;
  return (
    <div className={`flex gap-x-6 mx-auto xl:mx-0 ${footer ? "mb-4" : ""}`}>
      {Object.keys(socials).map((social, index) => {
        return (
          <NavigationComponent
            href={socials[social as keyof Social]}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={
                footer
                  ? "text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
                  : `text-foreground text-[22px] hover:text-primary transition-all`
              }
            >
              <Icon icon={SocialIcons[social as keyof typeof SocialIcons]} />
            </div>
          </NavigationComponent>
        );
      })}
    </div>
  );
};

export default Socials;
