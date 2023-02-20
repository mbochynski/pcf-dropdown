import * as React from "react";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownOption,
  IDropdownStyles,
} from "@fluentui/react/lib/Dropdown";

export interface IHelloWorldProps {
  name?: string;
}

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };

const dropdownControlledExampleOptions = [
  {
    key: "fruitsHeader",
    text: "Fruits",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "apple", text: "Apple" },
  { key: "banana", text: "Banana" },
  { key: "orange", text: "Orange", disabled: true },
  { key: "grape", text: "Grape" },
  { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
  {
    key: "vegetablesHeader",
    text: "Vegetables",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "broccoli", text: "Broccoli" },
  { key: "carrot", text: "Carrot" },
  { key: "lettuce", text: "Lettuce" },
];

export const HelloWorld: React.FC<IHelloWorldProps> = (props) => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

  const onChange = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption | undefined
  ): void => {
    setSelectedItem(item);
  };

  return (
    <Dropdown
      label={props.name}
      selectedKey={selectedItem ? selectedItem.key : undefined}
      onChange={onChange}
      placeholder="Select an option"
      options={dropdownControlledExampleOptions}
      styles={dropdownStyles}
    />
  );
};
