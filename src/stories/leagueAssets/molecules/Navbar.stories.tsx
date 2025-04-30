import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../../../app/components/molecules/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "LeagueAssets/Molecules/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;
const sampleItems = [
  { id: "home", name: "Home", label: "Home" },
  { id: "login", name: "Login", label: "Login" },
  { id: "admin", name: "Admin", label: "Admin" },
  { id: "stats", name: "Statistics", label: "Statistics" },
  { id: "about", name: "About", label: "About" },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};
export const WithActiveItem: Story = {
  args: {
    items: sampleItems,
    activeItemId: "home",
  },
};

export const WithCustomClassName: Story = {
  args: {
    items: sampleItems,
    className: "bg-gray-800 text-white",
  },
};

export const WithCustomActiveItemClassName: Story = {
  args: {
    items: sampleItems,
    activeItemId: "home",
    activeItemClassName: "bg-blue-500 text-white",
  },
};

export const WithCustomIcon: Story = {
  args: {
    items: sampleItems.map((item) => ({
      ...item,
      icon: <span className="w-5 h-5">{item.label[0]}</span>,
    })),
  },
};

export const WithCustomLabel: Story = {
  args: {
    items: sampleItems.map((item) => ({
      ...item,
      label: <span className="text-lg font-bold">{item.label}</span>,
    })),
  },
};

export const WithCustomOnClick: Story = {
  args: {
    items: sampleItems.map((item) => ({
      ...item,
      onClick: () => alert(`Clicked ${item.label}`),
    })),
  },
};

export const WithCustomIconAndLabel: Story = {
  args: {
    items: sampleItems.map((item) => ({
      ...item,
      icon: <span className="w-5 h-5">{item.label[0]}</span>,
      label: <span className="text-lg font-bold">{item.label}</span>,
    })),
  },
};

export const WithCustomIconAndOnClick: Story = {
  args: {
    items: sampleItems.map((item) => ({
      ...item,
      icon: <span className="w-5 h-5">{item.label[0]}</span>,
      onClick: () => alert(`Clicked ${item.label}`),
    })),
  },
};
