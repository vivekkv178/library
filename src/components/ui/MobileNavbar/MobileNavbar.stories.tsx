import type { Meta, StoryObj } from "@storybook/react";

import MobileNavbar from "./MobileNavbar";
import MockNextLink from "../Sidebar/MockNextLink";
import { logoUrl } from "@/lib/constants";

const meta: Meta<typeof MobileNavbar> = {
  title: "UI-Components/MobileNavbar",
  component: MobileNavbar,
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
type Story = StoryObj<typeof MobileNavbar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    navbarProps: {
      marketingRoutes: [
        { path: "/", name: "home" },
        { path: "/projects", name: "my projects" },
        { path: "/contact", name: "contact" },
      ],
      NavigationComponent: MockNextLink,
      currentPath: "/",
    },
    logoProps: {
      logoUrl: logoUrl,
      NavigationComponent: MockNextLink,
    },
  },
};
