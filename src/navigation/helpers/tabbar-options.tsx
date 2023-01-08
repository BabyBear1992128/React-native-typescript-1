import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { RouteNames } from "~navigation/route-names";
import { BottomTabParamList } from "~navigation/types";

export const BottomTabBarOptionByRouteName: Record<
  keyof BottomTabParamList,
  BottomTabNavigationOptions
> = {
  [RouteNames.homeStack]: {
    tabBarLabel: "",
    tabBarShowLabel: false,
    title: "",
    tabBarIcon: (props) => <FontAwesome5 name="home" {...props} />,
  },
  [RouteNames.profileStack]: {
    tabBarLabel: "",
    tabBarShowLabel: false,
    title: "",
    tabBarIcon: (props) => <FontAwesome5 name="user" {...props} />,
  },
  [RouteNames.favoriteStack]: {
    tabBarLabel: "",
    tabBarShowLabel: false,
    title: "",
    tabBarIcon: (props) => <FontAwesome5 name="heart" {...props} />,
  },
  [RouteNames.calendarStack]: {
    tabBarLabel: "",
    tabBarShowLabel: false,
    title: "",
    tabBarIcon: (props) => <FontAwesome5 name="calendar" {...props} />,
  },
};
