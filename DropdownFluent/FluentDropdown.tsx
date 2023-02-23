import * as React from "react";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownOption,
} from "@fluentui/react/lib/Dropdown";
import { ThemeProvider } from "@fluentui/react";
import { useTheme } from "./useTheme";

export interface ItemType {
  key: string;
  text: string;
  itemType?: DropdownMenuItemType;
}

export interface IFluentDropdownProps {
  label?: string;
  themeJSON?: string;
  items: ItemType[];
  value: string;
  onChange: (value: string | undefined) => void;
}

export const FluentDropdown: React.FC<IFluentDropdownProps> = ({
  label,
  themeJSON,
  items,
  value,
  onChange,
}) => {
  const onChangeHandler = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption | undefined
  ): void => {
    onChange(item?.text);
  };

  const theme = useTheme(themeJSON);

  return (
    <ThemeProvider theme={theme}>
      <Dropdown
        label={label}
        selectedKey={value}
        onChange={onChangeHandler}
        placeholder="Select an option"
        options={items}
        calloutProps={{
          doNotLayer: true,
        }}
      />
    </ThemeProvider>
  );
};
