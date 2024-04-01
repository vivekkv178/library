import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import AppLayout from "./AppLayout";
import MockNextLink from "../Sidebar/MockNextLink";
import { logoUrl } from "@/lib/constants";

const meta: Meta<typeof AppLayout> = {
  title: "UI-Components/AppLayout2",
  component: AppLayout,
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
type Story = StoryObj<typeof AppLayout>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    children: <h1>Contents</h1>,
    NavigationComponent: MockNextLink,
    profileProps: {
      name: "Test",
      email: "test@test.com",
      userImage:
        "https://lh3.googleusercontent.com/a/ACg8ocLJdetzjgfbnUZfcPTJ8i38PSz1EUEmSa8AcWyxT_oZ=s96-c",
      logoutHandler: () => {},
    },
    navbarProps: {
      navs: [
        {
          title: "Home",
          path: "/",
          icon: "lucide:home",
        },
        {
          title: "Notifications",
          path: "#",
          icon: "lucide:bell",
          customClick: true,
        },
      ],
    },
    sidebarProps: {
      logo: logoUrl,
      logoStyles: "h-8 w-3/4",
    },
  },
};
