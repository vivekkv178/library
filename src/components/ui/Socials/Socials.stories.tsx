import type { Meta, StoryObj } from "@storybook/react";

import Socials from "./Socials";
import MockNextLink from "../Sidebar/MockNextLink";

const meta: Meta<typeof Socials> = {
  title: "UI-Components/Socials",
  component: Socials,
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
type Story = StoryObj<typeof Socials>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    NavigationComponent: MockNextLink,
    socials: {
      youtube: "string",
      linkedIn: "string",
      github: "string",
      facebook: "string",
      instagram: "string",
    },
  },
};
