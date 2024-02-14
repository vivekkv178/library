import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import MobileHeader from "./MobileHeader";
import MockNextLink from "../Sidebar/MockNextLink";

const meta: Meta<typeof MobileHeader> = {
  title: "UI-Components/Mobile Header",
  component: MobileHeader,
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
type Story = StoryObj<typeof MobileHeader>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    routes: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Login",
        path: "#",
        customClick: true,
      },
    ],
    NavigationComponent: MockNextLink,
    authHandler: () => {},
    authenticated: false,
    profileComponent: (
      <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
        <span className="font-semibold text-sm">HQ</span>
      </div>
    ),
  },
};
