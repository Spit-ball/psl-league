import type { Meta, StoryObj } from "@storybook/react";
import { SidebarButton } from "../../../app/components/atoms/SidebarButton";

const PlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
);

const meta: Meta<typeof SidebarButton> = {
  title: "LeagueAssets/Atoms/SidebarButton",
  component: SidebarButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SidebarButton>;

export const Default: Story = {
  args: {
    label: "Home",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <PlaceholderIcon />,
    label: "Home",
  },
};

export const Active: Story = {
  args: {
    icon: <PlaceholderIcon />,
    label: "Home",
    isActive: true,
  },
};
