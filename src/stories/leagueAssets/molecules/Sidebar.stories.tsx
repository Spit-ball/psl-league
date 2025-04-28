import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "../../../app/components/molecules/Sidebar";

const IconPlaceholder = ({
  shape,
}: {
  shape: "circle" | "square" | "triangle" | "star";
}) => {
  const paths = {
    circle: <circle cx="12" cy="12" r="8" />,
    square: <rect x="4" y="4" width="16" height="16" />,
    triangle: <path d="M12 4 L20 18 L4 18 Z" />,
    star: (
      <path d="M12 2 L15 8 L21 9 L17 14 L18 20 L12 17 L6 20 L7 14 L3 9 L9 8 Z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      {paths[shape]}
    </svg>
  );
};

const meta: Meta<typeof Sidebar> = {
  title: "LeagueAssets/Molecules/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const sampleItems = [
  { id: "home", label: "Home", icon: <IconPlaceholder shape="square" /> },
  { id: "teams", label: "Teams", icon: <IconPlaceholder shape="circle" /> },
  {
    id: "schedule",
    label: "Schedule",
    icon: <IconPlaceholder shape="triangle" />,
  },
  { id: "stats", label: "Statistics", icon: <IconPlaceholder shape="star" /> },
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
