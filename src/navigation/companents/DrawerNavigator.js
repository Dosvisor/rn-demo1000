import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import { AboutStackNavigator } from "./AboutNavigator";
import { CreateStackNavigator } from "./CreateNavigator";
import { MainStackNavigator } from "./MainStackNavigator";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../../theme";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation, route }) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        labelStyle: {
          fontFamily: "open-bold",
        },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          drawerLabel: "Главнаяя",
          drawerIcon: () => <Ionicons name="ios-star" />,
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}
        options={{ drawerLabel: "О программе" }}
      />
      <Drawer.Screen
        name="Create"
        component={CreateStackNavigator}
        options={{ drawerLabel: "Создать пост" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
