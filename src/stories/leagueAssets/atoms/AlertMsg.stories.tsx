import type { Meta, StoryObj } from "@storybook/react";
import { AlertMsg } from "../../../app/components/atoms/AlertMsg";

const meta: Meta<typeof AlertMsg> = {
  title: "LeagueAssets/Atoms/AlertMsg",
  component: AlertMsg,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      defaultValue: "info",
    },
    mode: {
      control: "radio",
      options: ["light", "dark"],
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <div data-mode={context.args.mode}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof AlertMsg>;

export const Info: Story = {
  args: {
    type: "info",
    message: "This is an info message",
    mode: "light",
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const InfoDark: Story = {
  args: {
    ...Info.args,
    mode: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Success: Story = {
  args: {
    type: "success",
    message: "This is a success message",
    mode: "light",
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const SuccessDark: Story = {
  args: {
    ...Success.args,
    mode: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "This is a warning message",
    mode: "light",
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const WarningDark: Story = {
  args: {
    ...Warning.args,
    mode: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "This is an error message",
    mode: "light",
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const ErrorDark: Story = {
  args: {
    ...Error.args,
    mode: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
