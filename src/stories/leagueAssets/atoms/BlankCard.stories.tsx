import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../app/components/atoms/BlankCard";

const meta: Meta<typeof Card> = {
  title: "LeagueAssets/Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f5f5f5" },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "outlined"],
      defaultValue: "default",
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      defaultValue: "md",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Basic card content",
    variant: "default",
    padding: "md",
  },
};

export const Elevated: Story = {
  args: {
    children: "Elevated card with shadow",
    variant: "elevated",
    padding: "md",
  },
};

export const Outlined: Story = {
  args: {
    children: "Outlined card with border",
    variant: "outlined",
    padding: "md",
  },
};

export const WithComplexContent: Story = {
  args: {
    variant: "elevated",
    padding: "lg",
    children: (
      <div className="w-[400px]">
        <div className="flex justify-between items-center pb-6 mb-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Match Results
          </h2>
          <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            View All
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Team A vs Team B
            </p>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400">
              Final
            </span>
          </div>
          <p className="text-3xl font-bold text-center py-4">3 - 2</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            March 15, 2024
          </p>
        </div>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    children: (
      <div className="w-[300px] h-[200px]">
        <img
          src="https://picsum.photos/300/200"
          alt="Example"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    ),
    padding: "none",
  },
};

export const CustomClassName: Story = {
  args: {
    children: "Card with custom background",
    className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
    padding: "lg",
  },
};
