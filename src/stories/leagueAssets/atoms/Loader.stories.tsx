import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "../../../app/components/atoms/Loader";

const meta: Meta<typeof Loader> = {
  title: "LeagueAssets/Atoms/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    mode: {
      control: "radio",
      options: ["light", "dark"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    size: "md",
    mode: "light",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    mode: "light",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    mode: "light",
  },
};

export const DarkMode: Story = {
  args: {
    size: "md",
    mode: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
