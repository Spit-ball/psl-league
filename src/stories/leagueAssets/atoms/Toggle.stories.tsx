import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../../app/components/atoms/Toggle";
import { fn } from "@storybook/test";

const meta: Meta<typeof Toggle> = {
  title: "LeagueAssets/Atoms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    checked: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    size: "md",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const CheckedSmall: Story = {
  args: {
    checked: true,
    size: "sm",
  },
};

export const CheckedLarge: Story = {
  args: {
    checked: true,
    size: "lg",
  },
};

export const DisabledSmall: Story = {
  args: {
    disabled: true,
    size: "sm",
  },
};
