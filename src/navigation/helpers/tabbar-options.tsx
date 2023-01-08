import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { RouteNames } from "~navigation/route-names";
import { BottomTabParamList } from "~navigation/types";

import { COMMON_STYLES } from "~theme/common-styles";
import { TouchableOpacity } from "react-native";

export const BottomTabBarOptionByRouteName: Record<
  keyof BottomTabParamList,
  BottomTabNavigationOptions
> = {
  [RouteNames.homeStack]: {
    tabBarLabel: "",
    tabBarShowLabel: false,
    title: "",
    headerLeft: () => {
      return (
        <TouchableOpacity>
          <FontAwesome5
            name="chevron-left"
            style={[COMMON_STYLES.COMMON_ICON_STYLES, { marginLeft: 20 }]}
          />
        </TouchableOpacity>
      );
    },
    tabBarIcon: (props) => <FontAwesome5 name="home" {...props} />,
  },
  [RouteNames.profileStack]: {
    tabBarLabel: "",
    tabBarShowLabel: false,
    title: "",
    headerLeft: () => {
      return (
        <TouchableOpacity>
          <FontAwesome5
            name="chevron-left"
            style={[COMMON_STYLES.COMMON_ICON_STYLES, { marginLeft: 20 }]}
          />
        </TouchableOpacity>
      );
    },
    tabBarIcon: (props) => <FontAwesome5 name="user" solid {...props} />,
  },
  [RouteNames.favoriteStack]: {
    tabBarLabel: "",
    tabBarShowLabel: false,
    title: "",
    headerLeft: () => {
      return (
        <TouchableOpacity>
          <FontAwesome5
            name="chevron-left"
            style={[COMMON_STYLES.COMMON_ICON_STYLES, { marginLeft: 20 }]}
          />
        </TouchableOpacity>
      );
    },
    tabBarIcon: (props) => <FontAwesome5 name="heart" solid {...props} />,
  },
  [RouteNames.itemsStack]: {
    tabBarLabel: "",
    tabBarShowLabel: false,
    title: "Teriyaki Pineapple Meatballs",
    headerTitleStyle: { color: "#7d838e", textDecorationLine: "underline" },
    headerLeft: () => {
      return (
        <TouchableOpacity>
          <FontAwesome5
            name="chevron-left"
            style={[COMMON_STYLES.COMMON_ICON_STYLES, { marginLeft: 20 }]}
          />
        </TouchableOpacity>
      );
    },
    tabBarIcon: (props) => <FontAwesome5 name="calendar" {...props} />,
  },
};
