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
      "https://ryan-portfolio-three.vercel.app/_next/image?url=%2Fwork%2F3.png&w=256&q=75",
    link: "https://ryan-portfolio-three.vercel.app/_next/image?url=%2Fwork%2F3.png&w=256&q=75",
    github:
      "https://ryan-portfolio-three.vercel.app/_next/image?url=%2Fwork%2F3.png&w=256&q=75",
    category: "javascript",
    name: "Javascript Library",
    description:
      "Lorem ipsum dolor sit amet. Aut incidunt quia est eligendi laboriosam rem dolores accusamus. Non dignissimos officia eum nulla unde cum nobis dignissimos qui sint quaerat ea nihil nisi qui enim repudiandae.",
  },
};
