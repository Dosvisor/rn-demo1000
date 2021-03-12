import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";

export const AppHeaderIcon = (props) => (
  <HeaderButton
    iconSize={24}
    color="#000"
    IconComponent={Ionicons}
    {...props}
  />
);
