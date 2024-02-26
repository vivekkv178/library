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
      "https://s3-figma-plugin-images-production-sig.figma.com/plugins/carousel/img/747985167520967365/a390cc98670fdf0cdcb5c4825008730055417ef5?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OctdDLjh7sjJ4~SWL2yePMWaOuYSm1b8mL74XRdmrTM2Ng4XQ9UxEJ2iO4obIlUZ32xjTCiZt3iuMtnEwj-Lp8f5aRqdZPSxhHAe0bKCn9cobSPd6aQBYn-zRKOvg~Kbns4CpW3ozU~ZgfvLfcojuQXh7VJAwkCdfG4~Lc1HRbM5WiNX6HchiCyNpqTsKPziTRg6JK7h1Td4pUYw5RLnDIzrSWVaIvdMGbVNdADNNy1d9DAtSf00OchBU7OVeOJMxPc9ljeZ1FO77ZcuLoynO-b2lMMee9FG~G6COGXpyt7zCiZDSBdTPrzr~ZsTQOoZR1ecefugJRCLe-YNsonh2Q__",
    link: "https://ryan-portfolio-three.vercel.app/_next/image?url=%2Fwork%2F3.png&w=256&q=75",
    github:
      "https://ryan-portfolio-three.vercel.app/_next/image?url=%2Fwork%2F3.png&w=256&q=75",
    category: "javascript",
    name: "Javascript Library",
    description:
      "Lorem ipsum dolor sit amet. Aut incidunt quia est eligendi laboriosam rem dolores accusamus. Non dignissimos officia eum nulla unde cum nobis dignissimos qui sint quaerat ea nihil nisi qui enim repudiandae.",
  },
};
