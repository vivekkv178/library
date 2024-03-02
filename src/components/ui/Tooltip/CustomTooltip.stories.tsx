import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CustomTooltip from "./CustomTooltip";
import { Button } from "../Button/Button";

const meta: Meta<typeof CustomTooltip> = {
  title: "UI-Components/CustomTooltip",
  component: CustomTooltip,
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
type Story = StoryObj<typeof CustomTooltip>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    tooltip: "Custom Tooltip",
    tooltipTrigger: <Button>Tooltip Trigger</Button>,
  },
};
