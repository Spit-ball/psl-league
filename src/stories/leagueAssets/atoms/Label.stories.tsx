import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../../app/components/atoms/Label";

const meta: Meta<typeof Label> = {
  title: "Components/Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["light", "dark"],
    },
    labelSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    fullWidth: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    tooltip: {
      control: "text",
      description: "Tooltip text shown on hover",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Default Label",
  },
};

export const Dark: Story = {
  args: {
    children: "Dark Label",
    variant: "dark",
  },
};

export const Small: Story = {
  args: {
    children: "Small Label",
    labelSize: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Label",
    labelSize: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Label",
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Label",
    disabled: true,
  },
};

export const WithTooltip: Story = {
  args: {
    children: "Hover me for tooltip",
    tooltip: "This is a helpful tooltip message",
  },
};

export const DarkWithTooltip: Story = {
  args: {
    children: "Dark Label with Tooltip",
    variant: "dark",
    tooltip: "Dark themed tooltip example",
  },
};
