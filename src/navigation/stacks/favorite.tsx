import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { FavoriteScreen } from "~screens/favorite";
import { RouteNames } from "../route-names";
import { FavoriteStackParamList, StackRoutesType } from "../types";

const Stack = createStackNavigator<FavoriteStackParamList>();

const favoriteStackRoutes: StackRoutesType<FavoriteStackParamList> = [
  { name: RouteNames.favorite, component: FavoriteScreen },
];

function FavoriteStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.favorite}>
      {favoriteStackRoutes.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default FavoriteStack;
