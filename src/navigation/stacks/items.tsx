import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ItemsScreen } from "~screens/items";
import { RouteNames } from "../route-names";
import { ItemsStackParamList, StackRoutesType } from "../types";

const Stack = createStackNavigator<ItemsStackParamList>();

const itemsStackRoutes: StackRoutesType<ItemsStackParamList> = [
  { name: RouteNames.items, component: ItemsScreen },
];

function ItemsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.items}>
      {itemsStackRoutes.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default ItemsStack;
