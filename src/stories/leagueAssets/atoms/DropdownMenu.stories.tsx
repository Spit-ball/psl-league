import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import {
  DropdownMenu,
  DropdownOption,
} from "../../../app/components/atoms/DropdownMenu";

export default {
  title: "LeagueAssets/Atoms/DropdownMenu",
  component: DropdownMenu,
} as Meta;

const Template: StoryFn = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options: DropdownOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <DropdownMenu
      options={options}
      value={selectedValue}
      onChange={setSelectedValue}
      placeholder="Select an option"
    />
  );
};

export const Default = Template.bind({});

// Example with pre-selected value
export const WithPreselectedValue = Template.bind({});
WithPreselectedValue.args = {
  value: "option2",
};
