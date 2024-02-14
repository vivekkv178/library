import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "./Sidebar";
import { SIDENAV_ITEMS } from "./constants";
import MockNextLink from "./MockNextLink";

const meta: Meta<typeof Sidebar> = {
  title: "UI-Components/Sidebar",
  component: Sidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    sidebarRoutes: SIDENAV_ITEMS,
    NavigationComponent: MockNextLink,
    brandLogo:
      "https://static.vecteezy.com/system/resources/previews/010/366/210/original/bell-icon-transparent-notification-free-png.png",
    brandName: "brand.name",
    currentRoutePath: "/",
  },
};
