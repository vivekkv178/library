import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Stat from "./Stat";
import { Icon } from "@iconify/react";

const meta: Meta<typeof Stat> = {
  title: "UI-Components/Stat",
  component: Stat,
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
type Story = StoryObj<typeof Stat>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    containerStyles: "",
    icon: <Icon icon="lucide:briefcase" className="w-8 h-8" />,
    endCountNum: 8,
    // endCountText: "+",
    badgeText: "Years of Experience",
  },
};
