import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RouteNames } from "../route-names";
import { BottomTabParamList } from "./tabbar";

// Items bottom tab
export type ItemsStackParamList = {
  [RouteNames.items]: undefined;
};

// Items stack navigation prop
export type ItemsStackNavigationProp<
  RouteName extends keyof ItemsStackParamList,
> = CompositeNavigationProp<
  StackNavigationProp<ItemsStackParamList, RouteName>,
  BottomTabNavigationProp<BottomTabParamList>
>;

// Items stack route prop

export type ItemsStackRouteProp<RouteName extends keyof ItemsStackParamList> =
  RouteProp<ItemsStackParamList, RouteName>;

// Items stack screen props
export type ItemsStackScreenProp<RouteName extends keyof ItemsStackParamList> =
  StackScreenProps<ItemsStackParamList, RouteName>;
