import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import MarketingHeader from "./MarketingHeader";
import MockNextLink from "../Sidebar/MockNextLink";

const meta: Meta<typeof MarketingHeader> = {
  title: "UI-Components/MarketingHeader",
  component: MarketingHeader,
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
type Story = StoryObj<typeof MarketingHeader>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    authenticated: false,
    brandName: "brand.name",
    brandLogo:
      "https://static.vecteezy.com/system/resources/previews/010/366/210/original/bell-icon-transparent-notification-free-png.png",
    marketingRoutes: [
      { name: "Features", path: "/features" },
      { name: "Home", path: "/home", private: true },
    ],
    loginHandler: () => alert("Login Clicked"),
    NavigationComponent: MockNextLink,
    profileComponent: (
      <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
        <span className="font-semibold text-sm">HQ</span>
      </div>
    ),
  },
};
