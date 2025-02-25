import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../../app/components/atoms/Input";

const meta: Meta<typeof Input> = {
  title: "LeagueAssets/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    variant: {
      control: "select",
      options: ["light", "dark"],
      defaultValue: "light",
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
    inputSize: "md",
  },
};

export const Small: Story = {
  args: {
    inputSize: "sm",
    placeholder: "Small input",
  },
};

export const Medium: Story = {
  args: {
    inputSize: "md",
    placeholder: "Medium input",
  },
};

export const Large: Story = {
  args: {
    inputSize: "lg",
    placeholder: "Large input",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    placeholder: "Light input",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    placeholder: "Dark input",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: "Full width input",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};
