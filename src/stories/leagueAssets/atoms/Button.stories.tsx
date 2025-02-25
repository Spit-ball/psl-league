import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "../../../app/components/atoms/Button";

export default {
  title: "LeagueAssets/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "discord", "sign-in", "sign-out"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    mode: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
  size: "md",
  mode: "light",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
  size: "md",
  mode: "light",
};

export const Discord = Template.bind({});
Discord.args = {
  children: "Discord Button",
  variant: "discord",
  size: "md",
  mode: "light",
};

export const SignIn = Template.bind({});
SignIn.args = {
  children: "Sign In Button",
  variant: "sign-in",
  size: "md",
  mode: "light",
};

export const SignOut = Template.bind({});
SignOut.args = {
  children: "Sign Out Button",
  variant: "sign-out",
  size: "md",
  mode: "light",
};
