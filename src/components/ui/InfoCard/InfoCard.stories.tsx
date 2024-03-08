import type { Meta, StoryObj } from "@storybook/react";

import InfoCard from "./InfoCard";
import MockNextLink from "../Sidebar/MockNextLink";

const meta: Meta<typeof InfoCard> = {
  title: "UI-Components/InfoCard",
  component: InfoCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    NavigationComponent: MockNextLink,
    image:
      "https://raw.githubusercontent.com/vivekkv178/cdn/main/portfolio/Thumbnail.png",
    link: "https://library-vivekkv.vercel.app/",
    github: "https://github.com/vivekkv178/library",
    category: "javascript",
    name: "Component Library",
    description:
      "Lorem ipsum dolor sit amet. Aut incidunt quia est eligendi laboriosam rem dolores accusamus. Non dignissimos officia eum nulla unde cum nobis dignissimos qui sint quaerat ea nihil nisi qui enim repudiandae.",
    newTab: true,
  },
};
