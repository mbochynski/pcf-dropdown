import * as React from "react";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownOption,
  IDropdownStyles,
} from "@fluentui/react/lib/Dropdown";
import { ThemeProvider } from "@fluentui/react";
import { useTheme } from "./useTheme";

export interface IHelloWorldProps {
  label?: string;
  themeJSON?: string;
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

export const HelloWorld: React.FC<IHelloWorldProps> = ({
  label,
  themeJSON,
}) => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

  const onChange = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption | undefined
  ): void => {
    setSelectedItem(item);
  };

  const theme = useTheme(themeJSON);

  return (
    <ThemeProvider theme={theme}>
      <Dropdown
        label={label}
        selectedKey={selectedItem ? selectedItem.key : undefined}
        onChange={onChange}
        placeholder="Select an option"
        options={dropdownControlledExampleOptions}
        // styles={dropdownStyles}
      />
    </ThemeProvider>
  );
};
