import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RouteNames } from "../route-names";
import { BottomTabParamList } from "./tabbar";

// Favorite bottom tab
export type FavoriteStackParamList = {
  [RouteNames.favorite]: undefined;
};

// Favorite stack navigation prop
export type FavoriteStackNavigationProp<
  RouteName extends keyof FavoriteStackParamList,
> = CompositeNavigationProp<
  StackNavigationProp<FavoriteStackParamList, RouteName>,
  BottomTabNavigationProp<BottomTabParamList>
>;

// Favorite stack route prop

export type FavoriteStackRouteProp<
  RouteName extends keyof FavoriteStackParamList,
> = RouteProp<FavoriteStackParamList, RouteName>;

// Favorite stack screen props
export type FavoriteStackScreenProp<
  RouteName extends keyof FavoriteStackParamList,
> = StackScreenProps<FavoriteStackParamList, RouteName>;
