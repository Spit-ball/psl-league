import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../../../app/components/atoms/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "LeagueAssets/Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: "https://picsum.photos/200/300",
    alt: "User avatar",
    size: "md",
  },
};

export const WithFallback: Story = {
  args: {
    defaultFallback: "John Doe",
    size: "md",
  },
};
