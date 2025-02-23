// Input.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Input from "./Input";
import "./Input.css";

export default {
  title: "Atoms/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args: any) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text...",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Enter password...",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "Disabled input...",
};
