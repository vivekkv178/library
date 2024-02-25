import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Hero from "./Hero";
import MockNextLink from "../Sidebar/MockNextLink";
import { Icon } from "@iconify/react";
import Stat from "../Stat/Stat";
import { Send } from "lucide-react";

const meta: Meta<typeof Hero> = {
  title: "UI-Components/Hero",
  component: Hero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Hero>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    NavigationComponent: MockNextLink,
    socialProps: {
      NavigationComponent: MockNextLink,
      socials: {
        youtube: "string",
        linkedIn: "string",
        // github: "string",
        // facebook: "string",
        // instagram: "string",
      },
    },
    heroTitle: "Javascript Developer",
    heroText: (
      <h1 className="h1 mb-4">
        {"Hello World !"}
        <br />
        {"Meet Vivek"}
      </h1>
    ),
    heroDescription:
      "A self-motivated professional with 5+ years of experience in both corporate and startup cultures with a focus on E2E Product Development.",
    primaryButton: {
      label: "Contact Me",
      icon: <Send />,
      variant: "default",
      link: "/contact",
    },
    secondaryButton: {
      label: "Download CV",
      icon: <Send />,
      variant: "default",
      link: "",
      newTab: true,
    },
    heroImg: (
      <div className="hidden xl:flex relative">
        <Stat
          containerStyles="absolute top-[24%] -left-[5rem]"
          icon={<Icon icon="logos:nodejs" className="w-8 h-8" />}
          endCountNum={8}
          badgeText="Years on Node.js"
        />
        <Stat
          containerStyles="absolute top-[80%] -left-[1rem]"
          icon={<Icon icon="logos:aws" className="w-8 h-8" />}
          endCountNum={2}
          // endCountText="k"
          badgeText="Years on AWS"
        />
        <Stat
          containerStyles="absolute top-[55%] -right-8"
          icon={<Icon icon="logos:react" className="w-8 h-8" />}
          endCountNum={6}
          // endCountText="k"
          badgeText="Years on React.js"
        />
        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
        <div className="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom">
          <img src="/hero/developer.png" alt="" />
        </div>
      </div>
    ),
  },
};
